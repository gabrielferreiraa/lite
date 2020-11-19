import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useRecoilState } from 'recoil'

import { orderState } from 'state'
import { Hero, Body } from 'components/Text'
import Button from 'components/Button'
import ConsultsSlider from 'components/ConsultsSlider'
import {
  Grid,
  CtaArea,
  Column,
  QuantityInput,
  Total,
  ConsultsSliderWrapper,
  QuantityConsultsWrapper,
} from 'styles/pages/Home.styles'
import { MIN_OF_CONSULTS, MAX_OF_CONSULTS } from 'shared/constants'
import { calcConsultPrice } from 'shared/utils'

const Home: React.FC = () => {
  const router = useRouter()
  const [order, setOrder] = useRecoilState(orderState)

  const handleChangeQtdConsults = (value: number) => {
    const isGreaterThanMax = value > MAX_OF_CONSULTS

    setOrder({
      ...order,
      qtdConsults: isGreaterThanMax ? MAX_OF_CONSULTS : value,
    })
  }

  useEffect(
    () =>
      setOrder({
        ...order,
        price: calcConsultPrice(Number(order.qtdConsults)),
      }),
    [order.qtdConsults],
  )

  return (
    <div data-testid="home-page">
      <Head>
        <title>Lite | Home</title>
      </Head>

      <Grid>
        <Column>
          <Hero color="dark">this is the Lite!</Hero>
          <Body color="grey400">buy consults</Body>
          <CtaArea>
            <Button
              label={`Buy ${order.qtdConsults} consults`}
              color="alert"
              onClick={() => router.push('/summary')}
            />
          </CtaArea>
        </Column>
        <Column>
          <Total>R$ {order.price}</Total>
          <ConsultsSliderWrapper>
            <ConsultsSlider
              value={order.qtdConsults}
              onChange={qtdConsults => setOrder({ ...order, qtdConsults })}
            />
          </ConsultsSliderWrapper>
          <QuantityConsultsWrapper>
            <QuantityInput
              placeholder="0"
              value={order.qtdConsults}
              minLength={MIN_OF_CONSULTS}
              maxLength={MAX_OF_CONSULTS}
              onChange={({ target }) =>
                handleChangeQtdConsults(Number(target.value))
              }
            />
            <Body>consults</Body>
          </QuantityConsultsWrapper>
        </Column>
      </Grid>
    </div>
  )
}

export default Home
