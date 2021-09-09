import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client'
import fetch from 'isomorphic-fetch'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'
import { memo } from 'react'

export const ApolloGraphqlProvider = ({ children }) => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0()

  const authLink = setContext(async (_, { headers }) => {
    let accessToken = null
    try {
      if (!accessToken) {
        accessToken = await getAccessTokenSilently({
          audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
        })
      }
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
    fetch,
    uri: process.env.NEXT_PUBLIC_END_POINT,
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
  console.log(client)

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
