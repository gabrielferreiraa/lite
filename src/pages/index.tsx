import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useRecoilState } from 'recoil'

import { orderState } from 'state'
import { Hero, Body } from 'components/Text'
import Button from 'components/Button'
import ConsultsSlider from 'components/ConsultsSlider'
import { MIN_OF_CONSULTS, MAX_OF_CONSULTS } from 'shared/constants'
import { calcConsultsPrice, formatCurrency } from 'shared/utils'
import {
  Grid,
  CtaArea,
  IntroColumn,
  SliderColumn,
  QuantityInput,
  Total,
  ConsultsSliderWrapper,
  QuantityConsultsWrapper,
} from 'styles/pages/Home.styles'

const Home: React.FC = () => {
  const router = useRouter()
  const [order, setOrder] = useRecoilState(orderState)

  const handleChangeQtdConsults = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isValid = !!event.target.value && !Number.isNaN(event.target.value)
      if (!isValid) event.preventDefault()

      const value = Number(event.target.value)

      const isGreaterThanMax = value > MAX_OF_CONSULTS
      setOrder({
        ...order,
        qtdConsults: isGreaterThanMax ? MAX_OF_CONSULTS : value,
      })
    },
    [],
  )

  useEffect(
    () =>
      setOrder({
        ...order,
        price: calcConsultsPrice(Number(order.qtdConsults)),
      }),
    [order.qtdConsults],
  )

  return (
    <div data-testid="home-page">
      <Head>
        <title>Lite | Home</title>
      </Head>

      <Grid>
        <IntroColumn>
          <Hero color="dark">this is the Lite!</Hero>
          <Body color="grey400">buy consults</Body>
          <CtaArea>
            <Button
              label={`Buy ${order.qtdConsults} consults`}
              color="alert"
              onClick={() => router.push('/summary')}
              outline
            />
          </CtaArea>
        </IntroColumn>
        <SliderColumn>
          <Total>{formatCurrency(order.price)}</Total>
          <ConsultsSliderWrapper>
            <ConsultsSlider
              value={order.qtdConsults}
              onChange={qtdConsults => setOrder({ ...order, qtdConsults })}
            />
          </ConsultsSliderWrapper>
          <QuantityConsultsWrapper>
            <QuantityInput
              type="tel"
              placeholder="0"
              value={order.qtdConsults}
              minLength={MIN_OF_CONSULTS}
              maxLength={MAX_OF_CONSULTS}
              onChange={handleChangeQtdConsults}
            />
            <Body color="grey400">consults</Body>
          </QuantityConsultsWrapper>
        </SliderColumn>
      </Grid>
    </div>
  )
}

export default Home
