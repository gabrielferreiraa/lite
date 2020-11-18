import { render, screen } from 'shared/test-utils'
import App from 'pages'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })
})
