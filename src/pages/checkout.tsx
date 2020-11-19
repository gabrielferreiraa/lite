import { useState } from 'react'
import Head from 'next/head'
import Cards from 'react-credit-cards'
import { useRecoilState, useRecoilValue } from 'recoil'

import Field from 'components/Field'
import Link from 'components/Link'
import { orderState, creditCardState } from 'state'
import { showOrder } from 'shared/utils'
import {
  CheckoutTitle,
  CardsWrapper,
  FormWrapper,
  FieldsWrapper,
  CheckoutActions,
  PayButton,
} from 'styles/pages/Checkout.styles'

const Summary: React.FC = () => {
  const [focus, setFocus] = useState('')
  const order = useRecoilValue(orderState)
  const [creditCard, setCreditCard] = useRecoilState(creditCardState)

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFocus(event.target.name === 'cvv' ? 'cvc' : event.target.name)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setCreditCard({ ...creditCard, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    showOrder(order, creditCard)
  }

  return (
    <div data-testid="checkout-page">
      <Head>
        <title>Lite | Checkout</title>
      </Head>

      <CheckoutTitle>checkout</CheckoutTitle>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <CardsWrapper>
            <Cards
              cvc={creditCard.cvv}
              expiry={creditCard.expiry}
              focused={focus}
              name={creditCard.name}
              number={creditCard.number}
            />
          </CardsWrapper>
          <FieldsWrapper>
            <Field
              type="tel"
              id="number"
              name="number"
              label="Card Number"
              placeholder="0000 0000 0000 0000"
              className="number"
              mask="#### #### #### ####"
              value={creditCard.number}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Field
              id="number"
              name="name"
              label="Name"
              placeholder="Exactly as it's on the card"
              className="name"
              value={creditCard.name}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Field
              type="tel"
              id="expiry"
              name="expiry"
              label="Expiration Date"
              placeholder="MM/YY"
              className="expiry"
              mask="##/##"
              value={creditCard.expiry}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Field
              type="tel"
              id="cvv"
              name="cvv"
              label="CVV"
              placeholder="000"
              className="cvv"
              mask="###"
              value={creditCard.cvv}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Field
              type="tel"
              id="cnpj"
              name="cnpj"
              label="CNPJ"
              placeholder="00.000.000/0000-00"
              className="cnpj"
              mask="##.###.###/####-##"
              value={creditCard.cnpj}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </FieldsWrapper>
        </FormWrapper>

        <CheckoutActions>
          <Link href="/summary">summary</Link>
          <PayButton type="submit" label="PAY" color="success" />
        </CheckoutActions>
      </form>
    </div>
  )
}

export default Summary
