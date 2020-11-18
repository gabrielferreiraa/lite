import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Container from 'components/Container'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
)

export default MyApp
