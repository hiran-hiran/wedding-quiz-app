import { VFC } from 'react'
import Link from 'next/link'

const Header: VFC = () => {
  return (
    <header className="p-5 bg-red-300">
      <nav>
        <Link href="/admin/">
          <a className="text-white">Home</a>
        </Link>
        <Link href="/admin/login/">
          <a className="ml-5 text-white">Login</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
