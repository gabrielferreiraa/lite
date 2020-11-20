import styled from 'styled-components'
import { Title } from 'components/Text'

export const Grid = styled.div`
  grid-template-columns: 1fr 1fr;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: grid;
    height: 100vh;
    text-align: inherit;
  }
`

export const IntroColumn = styled.div`
  align-self: center;
  justify-self: center;

  @media screen and (max-width: 768px) {
    margin: 3em 0;
  }
`

export const SliderColumn = styled.div`
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
  width: 100%;
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

  @media screen and (max-width: 768px) {
    height: 30vh;
  }
`

export const QuantityConsultsWrapper = styled.div`
  text-align: center;
  margin-top: 1.5em;
`
