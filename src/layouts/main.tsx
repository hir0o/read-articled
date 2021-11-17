import { Box, Container } from '@chakra-ui/layout'
import { FC } from 'react'
import Head from 'next/head'
import { Router } from 'next/dist/client/router'

const Main: FC<{ router: Router }> = ({ children }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Read Articles</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
