import { formatCurrency, calcConsultsPrice } from './utils'

describe('shared/utils', () => {
  test('formatCurrency should format current correctly', () => {
    expect(formatCurrency(0)).toEqual('R$ 0,00')
    expect(formatCurrency(2000)).toEqual('R$ 2.000,00')
    expect(formatCurrency(912)).toEqual('R$ 912,00')
  })

  test('calcConsultsPrice should calc price correctly', () => {
    expect(calcConsultsPrice(2)).toEqual(0.18)
    expect(calcConsultsPrice(1000)).toEqual(90)
    expect(calcConsultsPrice(1024)).toEqual(93.84)
    expect(calcConsultsPrice(2500)).toEqual(370)
    expect(calcConsultsPrice(10000)).toEqual(2170)
  })
})
