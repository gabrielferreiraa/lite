import { atom } from 'recoil'

export interface OrderStateProps {
  price: number
  qtdConsults: number
}
export const orderState = atom<OrderStateProps>({
  key: 'order',
  default: {
    price: 0,
    qtdConsults: 0,
  },
})

export interface CreditCardStateProps {
  name: string
  number: string
  expiry: string
  cvc: string
  cnpj: string
}
export const creditCardState = atom<CreditCardStateProps>({
  key: 'creditCard',
  default: {
    name: '',
    number: '',
    expiry: '',
    cvc: '',
    cnpj: '',
  },
})
