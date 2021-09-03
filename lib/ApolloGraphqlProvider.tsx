import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'

export const ApolloGraphqlProvider = ({ children }) => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0()

  const authLink = setContext(async (_, { headers }) => {
    let accessToken = null
    try {
      accessToken = await getAccessTokenSilently({
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
        // scope: 'read:current_user',
      })
    } catch (e) {
      console.log('authLink error', { e })
    }

    headers = { ...headers }
    if (accessToken) {
      headers.authorization = `Bearer ${accessToken}`
    }
    console.log('accessToken', { accessToken })

    return { headers }
  })

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_END_POINT,
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
