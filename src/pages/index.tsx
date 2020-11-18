import React from 'react'
import Head from 'next/head'

import { Hero, Body, Cta, Title } from 'components/Text'
import Button from 'components/Button'

const Home: React.FC = () => (
  <div data-testid="home-page">
    <Head>
      <title>NFe - Lite</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Hero>Aa</Hero>
      <Title>Bb</Title>
      <Body>Cc</Body>
      <Cta>Dd</Cta>
      <Button label="Consultar" />
      <Button label="Consultar" color="success" />
      <Button label="Consultar" color="alert" />
      <Button label="Consultar" outline />
    </main>
  </div>
)

export default Home
