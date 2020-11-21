import { render, screen } from 'shared/test-utils'
import Link from '.'

describe('components/Link', () => {
  test('<Link /> should render children', () => {
    render(<Link href="/path">children</Link>)

    const link = screen.getByText('children')
    expect(link).toBeInTheDocument()
  })
})
