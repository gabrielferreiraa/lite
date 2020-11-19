import { Label, Input } from './Field.styles'

interface Props {
  type?: string
  className?: string
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
  id,
  name,
  label,
  placeholder,
  onChange,
  onFocus,
}) => {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  )
}

export default Field
