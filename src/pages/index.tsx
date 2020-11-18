import { useState, useEffect } from 'react'
import Head from 'next/head'

import { Hero, Body, Title } from 'components/Text'
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

const calc = v => v * 2 // rule to calc consult price

const Home: React.FC = () => {
  const [totalConsults, setTotalConsults] = useState(0)
  const [price, setPrice] = useState(0)

  const handleChangeTotalConsults = value => {
    if (Number(value) > MAX_OF_CONSULTS)
      return setTotalConsults(MAX_OF_CONSULTS)

    return setTotalConsults(Number(value))
  }

  useEffect(() => setPrice(calc(Number(totalConsults))), [totalConsults])

  return (
    <div data-testid="home-page">
      <Head>
        <title>NFe - Lite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        <Column>
          <Hero color="dark">this is the Lite!</Hero>
          <Body color="primary">buy consults</Body>
          <CtaArea>
            <Button label={`Buy ${totalConsults} consults`} color="alert" />
          </CtaArea>
        </Column>
        <Column>
          <Total>R$ {price}</Total>
          <ConsultsSliderWrapper>
            <ConsultsSlider value={totalConsults} onChange={setTotalConsults} />
          </ConsultsSliderWrapper>
          <QuantityConsultsWrapper>
            <QuantityInput
              placeholder="0"
              value={totalConsults}
              minLength={MIN_OF_CONSULTS}
              maxLength={MAX_OF_CONSULTS}
              onChange={({ target }) => handleChangeTotalConsults(target.value)}
            />
            <Body>consults</Body>
          </QuantityConsultsWrapper>
        </Column>
      </Grid>
    </div>
  )
}

export default Home
