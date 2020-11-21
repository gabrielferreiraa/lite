import styled, { CSSProperties, DefaultTheme } from 'styled-components'
import RcSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

const HANDLE_SIZE = 15 // px
const BAR_WIDTH = 3 // px

export const getHandleStyle = (theme: DefaultTheme): CSSProperties => ({
  borderColor: theme.colors.primary,
  height: HANDLE_SIZE,
  width: HANDLE_SIZE,
  marginLeft: -6,
  backgroundColor: theme.colors.primary,
  cursor: 'grabbing',
})

export const getTrackStyles = (theme: DefaultTheme): CSSProperties => ({
  backgroundColor: theme.colors.primary,
  width: BAR_WIDTH,
  borderRadius: 2,
})

export const getRailStyles = (theme: DefaultTheme): CSSProperties => ({
  backgroundColor: theme.colors.grey200,
  width: BAR_WIDTH,
  borderRadius: 2,
})

export const Slider = styled(RcSlider)`
  position: absolute;
  right: 50%;
  transform: translateX(7.5px);
  width: 15px;
`
