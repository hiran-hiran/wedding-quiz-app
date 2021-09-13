import { ApolloProvider } from '@apollo/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { useRouter } from 'next/dist/client/router'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { initializeApollo } from '../../lib/apolloClient'
import { ApolloGraphqlProvider } from '../../lib/ApolloGraphqlProvider'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  console.log('admin', router.pathname.includes('admin'))

  if (router.pathname.includes('admin')) {
    return (
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
      >
        <ApolloGraphqlProvider>
          <Component {...pageProps} />
        </ApolloGraphqlProvider>
      </Auth0Provider>
    )
  }

  if (!router.pathname.includes('admin')) {
    const client = initializeApollo()

    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default MyApp
