import React from 'react'
import { render as tlrRender, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

const render = (Component: React.ReactElement, options: RenderOptions = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )

  return tlrRender(Component, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'

export { render }
