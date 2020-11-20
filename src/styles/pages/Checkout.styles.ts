import styled from 'styled-components'
import 'react-credit-cards/es/styles-compiled.css'

import Button from 'components/Button'
import { Hero } from 'components/Text'

export const CheckoutTitle = styled(Hero)`
  text-align: center;
  margin: 2em 0;
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    margin-bottom: 3em;
  }

  @media screen and (min-width: 768px) {
    .rccs {
      margin: 0 5em 0 0;
    }
  }
`

export const FormWrapper = styled.div`
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
  }
`

export const FieldsWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  padding: 0 1em;

  @media screen and (min-width: 460px) {
    padding: 0 5em;
  }

  .expiry {
    grid-column: 1;
  }

  .cvv {
    grid-column: 2;
  }

  .cnpj,
  .number,
  .name {
    grid-column: 1 / 3;
  }
`

export const CheckoutActions = styled.div`
  margin: 3em auto 3em auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PayButton = styled(Button)`
  margin-left: 2em;
`
