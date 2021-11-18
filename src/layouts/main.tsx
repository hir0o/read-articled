import { Box, Container } from '@chakra-ui/layout'
import {
  Grid,
  GridItem,
  Switch,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'
import Head from 'next/head'
import React, { FC } from 'react'

const Main: FC<{ router: Router }> = ({ children }) => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Box minH="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Read Articles</title>
      </Head>

      <Grid templateColumns="200px 1fr" minH="100vh">
        <GridItem>
          <Box
            h="100vh"
            color={useColorModeValue('gray.300', 'gray.500')}
            borderRight={1}
            borderStyle="solid"
          >
            <Box color={useColorModeValue('gray.900', 'gray.100')}>
              サイドバー
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Switch value={colorMode} onChange={toggleColorMode} />
          </Box>
          <Container maxW="container.xl" pt={14}>
            {children}
          </Container>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Main
