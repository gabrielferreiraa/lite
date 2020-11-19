import { OrderStateProps, CreditCardStateProps } from 'state'

export const calcConsultPrice = v => v * 2 // rule to calc consult price

export const showOrder = (
  order: OrderStateProps,
  creditCard: CreditCardStateProps,
) => {
  alert(JSON.stringify({ order, creditCard }, null, 2))
}
