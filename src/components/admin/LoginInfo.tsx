import React from 'react'
import { VFC } from 'react'
import { format } from 'date-fns'

type Props = {
  data: {
    __typename?: 'admin_user'
    id: string
    name: string
    created_at: any
  }[]
  loading?: boolean
}

const LoginInfo: VFC<Props> = ({ data }) => {
  return (
    <>
      {data && (
        <div className="mt-10 border">
          <dl className="flex bb">
            <dt className="min-w-[100px] border-r p-2">作成日: </dt>
            <dd className="p-2">{format(data[0].created_at, 'YYYY-MM-DD')}</dd>
          </dl>
          <dl className="flex border-t">
            <dt className="min-w-[100px] border-r p-2">ID: </dt>
            <dd className="p-2 break-all">{data[0].id}</dd>
          </dl>
          <dl className="flex border-t">
            <dt className="min-w-[100px] border-r p-2">Name: </dt>
            <dd className="p-2 break-all">{data[0].name}</dd>
          </dl>
        </div>
      )}
    </>
  )
}

export default LoginInfo
