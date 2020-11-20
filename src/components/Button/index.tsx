import { Cta } from 'components/Text'
import theme from 'styles/theme'
import ButtonStyled from './Button.styles'

interface Props {
  label: string
  outline?: boolean
  color?: keyof typeof theme.colors
  onClick?: () => void
  type?: 'button' | 'submit'
}
const Button: React.FC<Props> = ({
  label,
  outline = false,
  color = 'primary',
  onClick = () => null,
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
