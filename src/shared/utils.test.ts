import { calcConsultsPrice, showOrder, formatCurrency } from './utils'
import { CreditCardStateProps, OrderStateProps } from 'state'

describe('shared/utils', () => {
  test('calcConsultsPrice should calc price correctly', () => {
    expect(calcConsultsPrice(2)).toEqual(0.18)
    expect(calcConsultsPrice(1000)).toEqual(90)
    expect(calcConsultsPrice(1024)).toEqual(93.84)
    expect(calcConsultsPrice(2500)).toEqual(370)
    expect(calcConsultsPrice(10000)).toEqual(2170)
  })

  test('showOrder should open alert with the order', () => {
    spyOn(window, 'alert')

    const creditCard: CreditCardStateProps = {
      cnpj: '928.127.239/0001-31',
      cvv: '213',
      expiry: '12/23',
      name: 'Customer Name',
      number: '1234 5678 9101 1121',
    }
    const order: OrderStateProps = {
      price: 0.18,
      qtdConsults: 2,
    }

    showOrder(order, creditCard)
    expect(window.alert).toBeCalled()
  })

  test('formatCurrency should format current correctly', () => {
    expect(formatCurrency(0)).toEqual('R$ 0,00')
    expect(formatCurrency(2000)).toEqual('R$ 2.000,00')
    expect(formatCurrency(912)).toEqual('R$ 912,00')
  })
})
