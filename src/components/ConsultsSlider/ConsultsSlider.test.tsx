import { render } from 'shared/test-utils'
import ConsultsSlider from '.'

describe('components/ConsultsSlider', () => {
  test('<Button /> should render with correctly styles', () => {
    const { container } = render(
      <ConsultsSlider value={0} onChange={jest.fn()} />,
    )
    expect(container).toBeInTheDocument()
  })
})
