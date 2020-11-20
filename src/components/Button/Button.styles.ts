import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import theme from 'styles/theme'
import { Cta } from 'components/Text'

interface Props {
  color?: keyof typeof theme.colors
  outline: boolean
}

const outlineStyles = css<Props>`
  background-color: ${({ theme }) => theme.colors.white};

  ${Cta} {
    color: ${({ theme, color }) => theme.colors[color]};
  }

  &:hover {
    background-color: ${({ theme, color }) => theme.colors[color]};

    ${Cta} {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &:active {
    background-color: ${({ theme, color }) =>
      lighten(0.1, theme.colors[color])};
  }
`

const normalStyles = css<Props>`
  background-color: ${({ theme, color }) => theme.colors[color]};

  ${Cta} {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};

    ${Cta} {
      color: ${({ theme, color }) => theme.colors[color]};
    }
  }

  &:active {
    background-color: ${({ theme }) => lighten(0.25, theme.colors.grey400)};
  }
`

export default styled.button<Props>`
  height: 40px;
  padding: 0 30px;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-sizing: border-box;
  transition: background-color 200ms ease;
  will-change: background-color;

  ${({ outline }) => (outline ? outlineStyles : normalStyles)}
`
