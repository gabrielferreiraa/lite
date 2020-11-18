import styled, { css } from 'styled-components'

import theme from 'styles/theme'

interface Props {
  color?: keyof typeof theme.colors
}

const defaultStyles = css<Props>`
  color: ${({ color = 'dark', theme }) => theme.colors[color]};
  letter-spacing: 0.2px;
`

export const Hero = styled.h1`
  ${defaultStyles}
  font-size: ${({ theme }) => theme.fontSizes.hero};
`

export const Title = styled.h2`
  ${defaultStyles}
  font-size: ${({ theme }) => theme.fontSizes.title};
`

export const Body = styled.p`
  ${defaultStyles}
  font-size: ${({ theme }) => theme.fontSizes.body};
`

export const Cta = styled.span`
  ${defaultStyles}
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.cta};
  font-weight: bold;
`
