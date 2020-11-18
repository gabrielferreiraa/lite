import { withTheme, DefaultTheme } from 'styled-components'
import { MIN_OF_CONSULTS, MAX_OF_CONSULTS } from 'shared/constants'
import { Slider } from './ConsultsSlider.styles'

interface Props {
  value: number
  onChange(v: number): void
  theme: DefaultTheme
}
const ConsultsSlider: React.FC<Props> = ({ value, onChange, theme }) => (
  <Slider
    railStyle={{
      backgroundColor: theme.colors.grey200,
      width: 3,
      borderRadius: 2,
    }}
    trackStyle={{
      backgroundColor: theme.colors.primary,
      width: 3,
      borderRadius: 2,
    }}
    handleStyle={{
      borderColor: theme.colors.primary,
      height: 15,
      width: 15,
      marginLeft: -6,
      backgroundColor: theme.colors.primary,
      cursor: 'grabbing',
    }}
    min={MIN_OF_CONSULTS}
    max={MAX_OF_CONSULTS}
    value={value}
    onChange={onChange}
    vertical
  />
)

export default withTheme(ConsultsSlider)
