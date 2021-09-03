import { useAuth0 } from '@auth0/auth0-react'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useGetAdminUserQuery } from '../../../types/generated/types'
import Header from '../../components/Header'

type Props = {}

const Login: NextPage<Props> = () => {
  const {
    isAuthenticated,
    logout,
    user,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0()
  const { data } = useGetAdminUserQuery()

  return (
    <div className="">
      <Header />
      <h1>Login</h1>
      {!isAuthenticated ? (
        <button
          className="bg-red-300 mt-3 px-3 py-2 text-white font-bold"
          onClick={() => loginWithRedirect()}
        >
          ログイン
        </button>
      ) : (
        <button
          className="bg-red-300 mt-3 px-3 py-2 text-white font-bold"
          onClick={() => logout()}
        >
          ログアウト
        </button>
      )}
    </div>
  )
}
export default Login
