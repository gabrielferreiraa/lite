import { withTheme, DefaultTheme } from 'styled-components'
import { MIN_OF_CONSULTS, MAX_OF_CONSULTS } from 'shared/constants'
import {
  Slider,
  getHandleStyle,
  getRailStyles,
  getTrackStyles,
} from './ConsultsSlider.styles'

interface Props {
  value: number
  onChange(v: number): void
  theme: DefaultTheme
}
const ConsultsSlider: React.FC<Props> = ({ value, onChange, theme }) => (
  <Slider
    handleStyle={getHandleStyle(theme)}
    railStyle={getRailStyles(theme)}
    trackStyle={getTrackStyles(theme)}
    min={MIN_OF_CONSULTS}
    max={MAX_OF_CONSULTS}
    value={value}
    onChange={onChange}
    vertical
  />
)

export default withTheme(ConsultsSlider)
