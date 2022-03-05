import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DesignTitle from '../../components/DesignTitle'

const Container = styled.main`
  min-height: 100vh;
  padding: 20px 70px;
`

export default function Home() {

  const WEB_DESIGNS = [
    {
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses'
    },
  ]

  return (
    <div>
      <Head>
        <title>Designo - Web Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Container>
        <Navbar />
        <DesignTitle />
        
      </Container>

      <Footer />
    </div>
  )
}
