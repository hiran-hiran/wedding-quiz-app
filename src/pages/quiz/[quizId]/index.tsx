import { useQuery } from '@apollo/client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { initializeApollo } from '../../../../lib/apolloClient'
import { GET_QUIZ, GET_QUIZ_BY_ID } from '../../../../queries/query'
import {
  useGetQuizByIdQuery,
  GetQuizByIdQuery,
  GetQuizQuery,
} from '../../../../types/generated/types'
import QuizLayout from '../../../components/quiz/QuizLayout'

// type Props = {}

const Home: NextPage<{ data: GetQuizByIdQuery }> = ({ data }) => {
  console.log('props', typeof data)

  return (
    <QuizLayout>
      <div className="">Home</div>
      {Object.entries(data).map(([key, value], i) => (
        <p key={i}>{`${key}: ${value}`}</p>
      ))}
    </QuizLayout>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetQuizByIdQuery>({
    query: GET_QUIZ_BY_ID,
    variables: { id: context.params.quizId },
  })

  return {
    props: { data: data.quiz_by_pk },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetQuizQuery>({
    query: GET_QUIZ,
  })

  const paths = data.quiz.map((el) => ({ params: { quizId: el.id } }))

  return { paths, fallback: false }
}
