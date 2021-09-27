import { NextPage } from 'next'
import Link from 'next/link'

type Props = {}

const Custom404: NextPage<Props> = () => {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <Link href="/admin/">
        <a className="block bg-red-300 mt-10 px-3 py-2 text-center text-white font-bold">
          adminページ
        </a>
      </Link>
      {/* <Link href="/quiz/">
        <a className="block bg-red-300 mt-10 px-3 py-2 text-center text-white font-bold">
          quizページ
        </a>
      </Link> */}
    </main>
  )
}
export default Custom404
