import { RecoilRoot } from 'recoil'
import {
  render as tlrRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

const render = (
  Component: React.ReactElement,
  options: RenderOptions = {},
): RenderResult => {
  const Wrapper = ({ children }) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RecoilRoot>
  )

  return tlrRender(Component, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'

export { render }
