import styled, { css } from 'styled-components'

import theme from 'styles/theme'

interface Props {
  color?: keyof typeof theme.colors
}

const color = css<Props>`
  ${({ color = 'dark', theme }) => theme.colors[color]};
`

export const Hero = styled.h1<Props>`
  color: ${color};
  font-size: ${({ theme }) => theme.fontSizes.hero};
`

export const Title = styled.h2<Props>`
  color: ${color};
  font-size: ${({ theme }) => theme.fontSizes.title};
`

export const Body = styled.p<Props>`
  color: ${color};
  font-size: ${({ theme }) => theme.fontSizes.body};
`

export const Cta = styled.span<Props>`
  color: ${color};
  font-size: ${({ theme }) => theme.fontSizes.cta};
  font-weight: bold;
`
