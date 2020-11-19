import { render, screen } from 'shared/test-utils'
import Home from 'pages'

describe('Home', () => {
  test('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })
})
