import { NextPage } from 'next'
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
  const { data: quizData, loading: quizLoading } = useGetQuizQuery()

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

        {quizData && <QuizList quizData={quizData} />}
      </div>
    </AdminLayout>
  )
}
export default Home
