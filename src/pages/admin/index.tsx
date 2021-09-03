import { useAuth0 } from '@auth0/auth0-react'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { useGetAdminUserQuery } from '../../../types/generated/types'
import Header from '../../components/Header'

type Props = {}

// export const getServerSideProps: GetServerSideProps = async () => {
//   console.log(useGetAdminUserQuery)

//   const { data } = await useGetAdminUserQuery()

//   return {
//     props: { data },
//   }
// }

const Home: NextPage<Props> = (props) => {
  const { data } = useGetAdminUserQuery()

  // const getToken = async () => {
  //   const token = await getAccessTokenSilently({
  //     audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
  //   })
  //   console.log(token)
  // }

  // console.log(props)

  console.log('data', data)
  return (
    <div className="">
      <Header />
      Home
      {/* <button onClick={getToken}>token</button> */}
    </div>
  )
}
export default Home
