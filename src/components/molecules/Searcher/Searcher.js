import React, { useState, useContext } from 'react';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

import { Wrapper, SearchPokemon } from './Searcher.style';
import { fetchPokemon } from '../../../assets/helpers/dataFetch';

import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

const Searcher = () => {
  const { setPokemon, searchError, setSearchError } = useContext(PokemonsContext);
  const [formValue, setFormValue] = useState('');

  const handleFormInput = (e) => {
    setFormValue(e.target.value);
  };

  const handlePokemonSearch = async (e) => {
    e.preventDefault();
    setSearchError(null);

    await fetchPokemon(formValue)
      .then((data) => setPokemon(data))
      .catch((error) => {
        setSearchError('Pokemon not found...');
      });
    setFormValue('');
  };

  return (
    <Wrapper>
      <SearchPokemon onSubmit={handlePokemonSearch}>
        <Input value={formValue} onChange={handleFormInput} />
        <Button className="search" type="submit" text="search" disabled={false} />
      </SearchPokemon>
      {searchError ? <ErrorMessage message={searchError} /> : ''}
    </Wrapper>
  );
};

export default Searcher;
