import { render, screen, fireEvent } from '@testing-library/react';
import Searcher from './Searcher';
import { renderWithProviders } from '../../../assets/helpers/renderWithProviders';

describe('Input with button', () => {
  it('Renders the component', () => {
    renderWithProviders(<Searcher />);
    fireEvent.change(screen.getByPlaceholderText('Find Pokemon...'), { target: { value: 'Pikachu' } });
    fireEvent.submit(screen.getByTestId('search-form'));
  });
});
