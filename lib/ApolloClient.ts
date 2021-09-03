import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0()

  const authLink = setContext(async (_, { headers }) => {
    let accessToken = null
    try {
      accessToken = await getAccessTokenWithPopup({
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
        // scope: "default:admin"
      })
    } catch (e) {
      console.log('authLink error', { e })
    }

    headers = { ...headers }
    if (accessToken) {
      headers.authorization = `Bearer ${accessToken}`
    }
    console.log('accessToken', accessToken)
    console.log('headers', headers)

    return { headers }
  })

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_END_POINT,
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = () => {
  const _apolloClient = apolloClient ?? createApolloClient()
  if (typeof window === 'undefined') {
    console.log(_apolloClient)
    return _apolloClient
  }
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}
