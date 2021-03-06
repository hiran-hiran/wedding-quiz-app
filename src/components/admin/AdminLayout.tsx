import React, { VFC } from 'react'
import { ReactNode } from 'react'
import Header from './Header'

type Props = {
  children: ReactNode
}

const AdminLayout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-5 py-10">
        <div className="mx-auto max-w-screen-sm">{children}</div>
      </main>
    </>
  )
}

export default AdminLayout
