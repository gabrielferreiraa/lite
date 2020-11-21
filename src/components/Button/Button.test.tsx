import { render, screen, fireEvent } from 'shared/test-utils'
import Button from '.'

describe('components/Button', () => {
  test('<Button /> should render with correctly styles', () => {
    render(<Button label="Button Label" onClick={jest.fn()} />)

    const button = screen.getByText('Button Label')
    expect(button).toBeInTheDocument()
  })

  test('<Button /> should call onClick', () => {
    const onClick = jest.fn()
    render(<Button label="Button Label" onClick={onClick} />)

    fireEvent.click(screen.getByText('Button Label'))

    expect(onClick).toBeCalled()
  })
})
