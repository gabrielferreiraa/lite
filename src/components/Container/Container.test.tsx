import { render, screen } from 'shared/test-utils'
import Container from '.'

describe('components/Container', () => {
  test('<Container /> should render children', () => {
    render(<Container>children</Container>)

    const container = screen.getByText('children')
    expect(container).toBeInTheDocument()
  })
})
