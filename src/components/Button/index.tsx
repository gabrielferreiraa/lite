import { Cta } from 'components/Text'
import theme from 'styles/theme'
import ButtonStyled from './Button.styles'

interface Props {
  label: string
  outline?: boolean
  color?: keyof typeof theme.colors
  onClick?: () => void
}
const Button: React.FC<Props> = ({
  label,
  outline = false,
  color,
  onClick,
  ...props
}) => {
  return (
    <ButtonStyled outline={outline} color={color} onClick={onClick} {...props}>
      <Cta>{label}</Cta>
    </ButtonStyled>
  )
}

export default Button
