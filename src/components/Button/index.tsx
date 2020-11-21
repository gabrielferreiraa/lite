import { Cta } from 'components/Text'
import theme from 'styles/theme'
import ButtonStyled from './Button.styles'

interface Props {
  label: string
  onClick: () => void
  outline?: boolean
  color?: keyof typeof theme.colors
  type?: 'button' | 'submit'
}
const Button: React.FC<Props> = ({
  label,
  onClick,
  outline = false,
  color = 'primary',
  type = 'button',
  ...props
}) => {
  return (
    <ButtonStyled
      type={type}
      outline={outline}
      color={color}
      onClick={onClick}
      {...props}
    >
      <Cta>{label}</Cta>
    </ButtonStyled>
  )
}

export default Button
