import { render, screen } from 'shared/test-utils'
import Checkout from 'pages/checkout'

describe('Checkout', () => {
  it('renders without crashing', () => {
    render(<Checkout />)
    expect(screen.getByTestId('checkout-page')).toBeInTheDocument()
  })
})
