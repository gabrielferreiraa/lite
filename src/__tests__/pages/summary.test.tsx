import { render, screen } from 'shared/test-utils'
import Summary from 'pages/summary'

describe('Summary', () => {
  it('renders without crashing', () => {
    render(<Summary />)
    expect(screen.getByTestId('summary-page')).toBeInTheDocument()
  })
})
