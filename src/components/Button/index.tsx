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
}) => {
  return (
    <ButtonStyled outline={outline} color={color} onClick={onClick}>
      <Cta>{label}</Cta>
    </ButtonStyled>
  )
}

export default Button
