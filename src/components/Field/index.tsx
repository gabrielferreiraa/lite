import NumberFormat from 'react-number-format'
import { Label, Input } from './Field.styles'

interface Props {
  type?: string
  className?: string
  mask?: string
  value: any
  id: string
  name: string
  label: React.ReactNode
  placeholder: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
  onFocus(event: React.FocusEvent<HTMLInputElement>): void
}
const Field: React.FC<Props> = ({
  type = 'text',
  className = '',
  mask = '',
  value,
  id,
  name,
  label,
  placeholder,
  onChange,
  onFocus,
}) => {
  const props = {
    id,
    value,
    name,
    placeholder,
    onChange,
    onFocus,
  }

  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      {!!mask ? (
        <NumberFormat customInput={Input} format={mask} {...props} />
      ) : (
        <Input type={type} {...props} />
      )}
    </div>
  )
}

export default Field
