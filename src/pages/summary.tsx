import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'

import { orderState } from 'state'
import { Title, Body } from 'components/Text'
import Link from 'components/Link'
import { formatCurrency } from 'shared/utils'
import {
  SummaryTitle,
  SummaryContainer,
  SummaryBox,
  SummaryBoxItem,
  NextButton,
  SummaryActions,
} from 'styles/pages/Summary.styles'

const Summary: React.FC = () => {
  const router = useRouter()
  const { qtdConsults, price } = useRecoilValue(orderState)

  return (
    <div data-testid="summary-page">
      <Head>
        <title>Lite | Summary</title>
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
            <Title>{formatCurrency(price)}</Title>
          </SummaryBoxItem>
        </SummaryBox>
        <SummaryActions>
          <Link href="/">back</Link>
          <NextButton label="NEXT" onClick={() => router.push('/checkout')} />
        </SummaryActions>
      </SummaryContainer>
    </div>
  )
}

export default Summary
