import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font: 400 16px Rubik, sans-serif;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`
