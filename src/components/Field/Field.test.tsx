import { render, fireEvent } from 'shared/test-utils'
import Field from '.'

describe('components/Field', () => {
  const setup = (onChange = () => jest.fn()) => {
    const container = render(
      <Field
        id="id"
        name="name"
        label="label"
        value=""
        placeholder="placeholder"
        mask="##/##"
        onChange={onChange}
        onFocus={jest.fn()}
      />,
    )
    const input = container.getByLabelText('label') as HTMLInputElement
    return {
      input,
      ...container,
    }
  }

  test('<Field /> should call events', () => {
    const onChange = jest.fn()

    const { input } = setup(onChange)

    fireEvent.change(input, { target: { value: 'a' } })
    expect(onChange).toBeCalled()

    expect(input).toBeInTheDocument()
  })

  test('<Field /> should call events with mask', () => {
    const { input } = setup()

    fireEvent.change(input, { target: { value: '30' } })
    expect(input.value).toEqual('30/  ')
    fireEvent.change(input, { target: { value: '' } })
    expect(input.value).toEqual('')

    expect(input).toBeInTheDocument()
  })
})
