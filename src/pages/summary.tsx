import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { orderState } from 'state'

import { Title, Body } from 'components/Text'
import Link from 'components/Link'
import {
  SummaryTitle,
  SummaryContainer,
  SummaryBox,
  SummaryBoxItem,
  NextButton,
  SummaryActions,
} from 'styles/pages/Summary.styles'

const Summary: React.FC = () => {
  const { qtdConsults, price } = useRecoilValue(orderState)

  return (
    <div data-testid="summary-page">
      <Head>
        <title>Lite | Summary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SummaryTitle>summary</SummaryTitle>
      <SummaryContainer>
        <SummaryBox>
          <SummaryBoxItem>
            <Body>Quantity</Body>
            <Title>{qtdConsults}</Title>
          </SummaryBoxItem>
          <SummaryBoxItem>
            <Body>Price</Body>
            <Title>R$ {price}</Title>
          </SummaryBoxItem>
        </SummaryBox>
        <SummaryActions>
          <Link href="/">back</Link>
          <NextButton color="success" label="NEXT" />
        </SummaryActions>
      </SummaryContainer>
    </div>
  )
}

export default Summary
