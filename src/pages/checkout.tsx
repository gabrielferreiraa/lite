import { useState } from 'react'
import Head from 'next/head'
import Cards from 'react-credit-cards'
import { useRecoilState } from 'recoil'

import Field from 'components/Field'
import Link from 'components/Link'
import { creditCardState } from 'state'
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
  const [creditCard, setCreditCard] = useRecoilState(creditCardState)

  const handleFocus = ({ target }: React.FocusEvent<HTMLInputElement>) =>
    setFocus(target.name)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setCreditCard({ ...creditCard, [target.name]: target.value })

  return (
    <div data-testid="checkout-page">
      <Head>
        <title>Lite | Checkout</title>
      </Head>

      <CheckoutTitle>checkout</CheckoutTitle>
      <form>
        <FormWrapper>
          <CardsWrapper>
            <Cards
              cvc={creditCard.cvc}
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
              label="Credit Number"
              placeholder="0000 0000 0000 0000"
              className="number"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Field
              id="number"
              name="name"
              label="Name"
              placeholder="Exactly as it's on the card"
              className="name"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Field
              type="tel"
              id="expiry"
              name="expiry"
              label="Valid Thru"
              placeholder="000"
              className="expiry"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Field
              type="tel"
              id="cvc"
              name="cvc"
              label="CVC"
              placeholder="000"
              className="cvc"
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
