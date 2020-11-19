import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.875rem;
  margin-bottom: 0.2em;
`

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.dark};
  outline: none;
  padding: 5px 10px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.grey300};
  }
`
