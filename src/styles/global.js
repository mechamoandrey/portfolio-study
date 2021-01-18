import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* darker-grotesque-regular - latin */
  @font-face {
    font-family: 'Darker Grotesque';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/darker-grotesque-v2-latin-regular.woff2') format('woff2')
  }
  /* darker-grotesque-500 - latin */
  @font-face {
    font-family: 'Darker Grotesque';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/darker-grotesque-v2-latin-500.woff2') format('woff2')
  }
  /* darker-grotesque-700 - latin */
  @font-face {
    font-family: 'Darker Grotesque';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/darker-grotesque-v2-latin-700.woff2') format('woff2')
  }
  /* ubuntu-regular - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/ubuntu-v15-latin-regular.woff2') format('woff2')
  }
  /* ubuntu-500 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('../fonts/ubuntu-v15-latin-500.woff2') format('woff2')
  }
  /* ubuntu-700 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('../fonts/ubuntu-v15-latin-700.woff2') format('woff2')
  }

  
  html{
    font-size: 62.5%;
  }
  body {
    padding: 5rem 9rem;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
  }
 
`

export default GlobalStyles