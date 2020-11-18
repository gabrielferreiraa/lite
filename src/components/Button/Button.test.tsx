import { render, screen } from 'shared/test-utils'
import Button from '.'

describe('components/Button', () => {
  test('<Button /> should render with correctly styles', () => {
    render(<Button label="Button Label" />)

    const button = screen.getByText('Button Label')
    expect(button).toBeInTheDocument()
  })
})
