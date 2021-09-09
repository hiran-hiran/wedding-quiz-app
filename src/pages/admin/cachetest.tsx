import React, { VFC } from 'react'
import { useApolloClient } from '@apollo/client'
import {
  GetAdminUserQuery,
  GetAdminUserDocument,
  useGetAdminUserQuery,
} from '../../../types/generated/types'
import AdminLayout from '../../components/admin/AdminLayout'

type Props = {}

const CacheTest: VFC<Props> = () => {
  // const client = useApolloClient()
  // const data = client.readQuery<GetAdminUserQuery>({
  //   query: GetAdminUserDocument,
  // })
  const { data } = useGetAdminUserQuery({ fetchPolicy: 'cache-only' })

  console.log('cache-only', data?.admin_user)

  return <AdminLayout>CacheTest</AdminLayout>
}

export default CacheTest
