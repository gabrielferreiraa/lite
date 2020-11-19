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

  .rccs {
    margin: 0 5em 0 0;
  }
`

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

export const FieldsWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  padding: 0 5em;

  .expiry {
    grid-column: 1;
  }

  .cvc {
    grid-column: 2;
  }

  .cnpj,
  .number,
  .name {
    grid-column: 1 / 3;
  }
`

export const CheckoutActions = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PayButton = styled(Button)`
  margin-left: 2em;
`
