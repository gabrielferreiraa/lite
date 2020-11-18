import React from 'react'
import Head from 'next/head'

import { Hero, Body, Cta, Title } from 'components/Text'

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
    </main>
  </div>
)

export default Home
