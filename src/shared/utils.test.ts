import { formatCurrency } from './utils'

describe('shared/utils', () => {
  test('formatCurrency should format current correctly', () => {
    expect(formatCurrency(0)).toEqual('R$ 0,00')
    expect(formatCurrency(2000)).toEqual('R$ 2.000,00')
    expect(formatCurrency(912)).toEqual('R$ 912,00')
  })
})
