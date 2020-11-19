import styled from 'styled-components'

export default styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: height 200ms ease;
  }

  &:hover:after {
    height: 2px;
  }
`
