import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html{
    box-sizing:border-box;
    color:'#222'

}

*,*::after, *::before{
    box-sizing:inherit;
    margin:0;
    padding:0;
}

body{
    font-family:'Indie flower';
    font-size:10px;
}

a,button{
    font-family:"Indie flower", sans-serif;
}

`;
