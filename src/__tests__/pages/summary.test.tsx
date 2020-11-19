import { render, screen } from 'shared/test-utils'
import Summary from 'pages/summary'

describe('Summary', () => {
  test('renders without crashing', () => {
    render(<Summary />)
    expect(screen.getByTestId('summary-page')).toBeInTheDocument()
  })
})
