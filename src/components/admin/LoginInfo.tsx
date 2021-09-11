import React from 'react'
import { VFC } from 'react'
import { format } from 'date-fns'

type Props = {
  data: {
    id: string
    created_at: any
    name?: string
    title?: string
  }[]
}

const LoginInfo: VFC<Props> = ({ data }) => {
  return (
    <>
      {data && (
        <div className="mt-10 border">
          <dl className="flex border-b">
            <dt className="min-w-[100px] border-r p-2">ID</dt>
            <dd className="p-2 break-all">{data[0].id}</dd>
          </dl>
          <dl className="flex border-b">
            <dt className="min-w-[100px] border-r p-2">作成日</dt>
            <dd className="p-2">{format(data[0].created_at, 'YYYY-MM-DD')}</dd>
          </dl>
          <dl className="flex">
            {data[0].name && (
              <>
                <dt className="min-w-[100px] border-r p-2">ユーザー</dt>{' '}
                <dd className="p-2 break-all">{data[0].name}</dd>
              </>
            )}
            {data[0].title && (
              <>
                <dt className="min-w-[100px] border-r p-2">タイトル</dt>{' '}
                <dd className="p-2 break-all">{data[0].title}</dd>
              </>
            )}
          </dl>
        </div>
      )}
    </>
  )
}

export default LoginInfo
