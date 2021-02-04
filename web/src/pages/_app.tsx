import { AppProps } from 'next/app'

// import { createClient, Provider } from 'urql'
import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../apollo/client'
import AuthContextProvider from '../context/AuthContextProvider'
// import '../styles/globals.css'
import NavBar from '../components/NavBar'
import theme from '../theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { CheckSignIn } from '../components/CheckSignIn'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      {/* <ThemeProvider theme={theme}> */}
      <ChakraProvider>
        <CSSReset />
        <AuthContextProvider>
          <NavBar />
          <Component {...pageProps} />
        </AuthContextProvider>
      </ChakraProvider>
      {/* </ThemeProvider> */}
    </ApolloProvider>
  )
}

export default MyApp
