import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import {
  useGetAdminUserQuery,
  useGetQuizQuery,
} from '../../../types/generated/types'
import AdminLayout from '../../components/admin/AdminLayout'
import LoginInfo from '../../components/admin/LoginInfo'
import { QuizList } from '../../components/admin/QuizList'

// type Props = {}

const Home: NextPage = () => {
  const { data: adminData, loading: adminLoading } = useGetAdminUserQuery()
  const { data: quizData, loading: quizLoading } = useGetQuizQuery({
    fetchPolicy: 'cache-and-network',
  })

  return (
    <AdminLayout>
      <h1 className="font-bold text-center text-2xl text-gray-500">Home</h1>
      {adminLoading ? (
        <div className="mt-10 text-center text-2xl text-gray-500">
          Loading...
        </div>
      ) : (
        <LoginInfo data={adminData?.admin_user} />
      )}

      <div className="mt-10">
        <h2 className="font-bold text-center text-xl text-gray-500">
          クイズリスト
        </h2>
        <LoginInfo data={quizData?.quiz} />
        <Link href={`/quiz/${quizData?.quiz[0].id}/`}>
          <a className="mt-2 py-2 inline-block border-b" target="_blank">
            クイズを見る
          </a>
        </Link>
        {quizData && <QuizList quizData={quizData} />}
      </div>
    </AdminLayout>
  )
}
export default Home
