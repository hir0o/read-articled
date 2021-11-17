import { AppProps } from 'next/app'
import { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../layouts/main'
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config })

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <ChakraProvider theme={theme}>
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
)

export default App
