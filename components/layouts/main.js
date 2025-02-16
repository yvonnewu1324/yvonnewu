import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import BobaLoader from '../boba-loader'

const Boba = dynamic(() => import('../boba'), {
  ssr: false,
  loading: () => <BobaLoader />
})

const Main = ({ children, router }) => {
  const isCVPage = router.pathname === '/cv'
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Yvonne Wu&apos;s Lab 👩‍🔬</title>
      </Head>

      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {!isCVPage && <Boba />}
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
