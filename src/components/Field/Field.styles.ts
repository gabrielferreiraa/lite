import styled from 'styled-components'
import { transparentize } from 'polished'

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.875rem;
  margin-bottom: 0.2em;
`

export const Input = styled.input`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  outline: none;
  padding: 5px 10px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 4px;
  transition: border-color 300ms ease, box-shadow 300ms ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0px 0px 2px
      ${({ theme }) => transparentize(0.5, theme.colors.primary)};
  }
`
