import styled from 'styled-components'

import Button from 'components/Button'
import { Hero } from 'components/Text'

export const SummaryTitle = styled(Hero)`
  text-align: center;
  margin: 2em 0;
`

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
`

export const SummaryBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1em 2em;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey100};
`

export const SummaryBoxItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;
`

export const SummaryActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 3em;
`

export const NextButton = styled(Button)`
  margin-left: 2em;
`
