import { Auth0Provider } from '@auth0/auth0-react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { ApolloGraphqlProvider } from '../../lib/ApolloGraphqlProvider'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
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

export default MyApp
