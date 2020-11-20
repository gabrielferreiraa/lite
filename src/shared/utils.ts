import { OrderStateProps, CreditCardStateProps } from 'state'
import {
  NORMAL_PRICE,
  FIRST_THOURSAND,
  FIRST_TWO_THOUSAND,
} from 'shared/constants'

const ranges = {
  firstThousand: {
    min: 0,
    max: 1000,
    price: FIRST_THOURSAND,
    closedThousandPrice: 1000 * FIRST_THOURSAND,
  },
  twoThousand: {
    min: 1000,
    max: 2000,
    price: FIRST_TWO_THOUSAND,
    closedThousandPrice: 1000 * FIRST_TWO_THOUSAND,
  },
}

export const calcConsultsPrice = (qtdConsults: number): number => {
  const { firstThousand, twoThousand } = ranges

  if (qtdConsults <= firstThousand.max) return qtdConsults * firstThousand.price

  if (qtdConsults > twoThousand.max) {
    const difference = (qtdConsults - twoThousand.max) * NORMAL_PRICE
    return (
      difference +
      firstThousand.closedThousandPrice +
      twoThousand.closedThousandPrice
    )
  }

  const difference = (qtdConsults - twoThousand.min) * twoThousand.price
  return difference + firstThousand.closedThousandPrice
}

export const showOrder = (
  order: OrderStateProps,
  creditCard: CreditCardStateProps,
): void => {
  alert(JSON.stringify({ order, creditCard }, null, 2))
}

export const formatCurrency = (number: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    number,
  )
