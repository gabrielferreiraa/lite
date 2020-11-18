import styled from 'styled-components'
import { Title } from 'components/Text'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

export const Column = styled.div`
  align-self: center;
  justify-self: center;
`

export const CtaArea = styled.div`
  margin-top: 3em;
`

export const QuantityInput = styled.input`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  text-align: center;
  border: none;
  outline: none;
`

export const Total = styled(Title)`
  text-align: center;
  margin-bottom: 1.5em;
`

export const ConsultsSliderWrapper = styled.div`
  position: relative;
  height: 50vh;
`

export const QuantityConsultsWrapper = styled.div`
  text-align: center;
  margin-top: 1.5em;
`
