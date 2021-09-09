// import { useAuth0 } from '@auth0/auth0-react'
import { GetStaticProps, NextPage } from 'next'
import { GET_ADMIN_USER } from '../../../queries/query'
import {
  GetAdminUserQuery,
  useGetAdminUserQuery,
} from '../../../types/generated/types'
import AdminLayout from '../../components/admin/AdminLayout'
import LoginInfo from '../../components/admin/LoginInfo'

type Props = {}

const Home: NextPage<Props> = (props) => {
  console.log(props)

  return (
    <AdminLayout>
      <LoginInfo />
      <div className="">
        Home
        {/* <button onClick={getToken}>token</button> */}
      </div>
    </AdminLayout>
  )
}
export default Home

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await apolloClient.query<GetAdminUserQuery>({
//     query: GET_ADMIN_USER,
//   })
//   return {
//     props: {
//       users: data.admin_user,
//     },
//     revalidate: 1,
//   }
// }
