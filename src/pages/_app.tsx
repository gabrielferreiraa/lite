import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import Container from 'components/Container'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  </RecoilRoot>
)

export default MyApp
