import { render } from '@testing-library/react'
import App from '.'

describe('App', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />)
    expect(getByText('Lite')).toBeInTheDocument()
  })
})
