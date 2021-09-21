import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { initializeApollo } from '../../../../lib/apolloClient'
import { GET_QUIZ, GET_QUIZ_BY_ID } from '../../../../queries/query'
import {
  GetQuizByIdQuery,
  GetQuizQuery,
  useUpdateGuestUserMutation,
} from '../../../../types/generated/types'
import QuizLayout from '../../../components/quiz/QuizLayout'
import { BsX } from 'react-icons/bs'
import { BiCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'

const Home: NextPage<{ data: GetQuizByIdQuery }> = ({
  data: { quiz_by_pk },
}) => {
  const [update_guest_user_by_pk] = useUpdateGuestUserMutation()
  const { ...quizes } = quiz_by_pk
  const [point, setPoint] = useState(0)
  const [answers, setAnswers] = useState({
    q1a: '',
    q2a: '',
    q3a: '',
    q4a: '',
    q5a: '',
    q6a: '',
    q7a: '',
    q8a: '',
    q9a: '',
    q10a: '',
  })

  // console.log('point', point)
  console.log('answers', answers)

  const quizArr = [
    quizes.q1,
    quizes.q2,
    quizes.q3,
    quizes.q4,
    quizes.q5,
    quizes.q6,
    quizes.q7,
    quizes.q8,
    quizes.q9,
    quizes.q10,
  ]
  const answerArr = {
    q1a: quizes.q1a,
    q2a: quizes.q2a,
    q3a: quizes.q3a,
    q4a: quizes.q4a,
    q5a: quizes.q5a,
    q6a: quizes.q6a,
    q7a: quizes.q7a,
    q8a: quizes.q8a,
    q9a: quizes.q9a,
    q10a: quizes.q10a,
  }

  const handleClick = (e) => {
    const answer = e.currentTarget.dataset.answer
    const quizNum = e.currentTarget.dataset.quiz

    setAnswers({ ...answers, [quizNum]: answer })

    if (answerArr[quizNum] === answer) {
      setPoint((prev) => (prev += 1))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const guestId = localStorage.getItem('quest-user-id')
    const { data } = await update_guest_user_by_pk({
      variables: {
        id: guestId,
        point: point,
        q1a: answers.q1a,
        q2a: answers.q2a,
        q3a: answers.q3a,
        q4a: answers.q4a,
        q5a: answers.q5a,
        q6a: answers.q6a,
        q7a: answers.q7a,
        q8a: answers.q8a,
        q9a: answers.q9a,
        q10a: answers.q10a,
      },
    })

    console.log('res', data)
  }

  return (
    <QuizLayout>
      <form onSubmit={handleSubmit} className="border border-gray-100">
        <ul>
          {quizArr.map((el, i) => (
            <li className="mt-3" key={i}>
              <p className="">{el}</p>
              <div className="flex justify-center mt-2">
                <div
                  className="flex justify-center items-center bg-green-400 h-10 w-14 mr-3 cursor-pointer"
                  onClick={handleClick}
                  data-answer="o"
                  data-quiz={`q${i + 1}a`}
                >
                  <IconContext.Provider
                    value={{ color: 'white', size: '1.1em' }}
                  >
                    <BiCircle />
                  </IconContext.Provider>
                </div>
                <div
                  className="flex justify-center items-center bg-red-400 h-10 w-14 mr-3 cursor-pointer"
                  onClick={handleClick}
                  data-answer="x"
                  data-quiz={`q${i + 1}a`}
                >
                  <IconContext.Provider
                    value={{ color: 'white', size: '1.1em' }}
                  >
                    <BsX />
                  </IconContext.Provider>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button>OK</button>
      </form>
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
    props: { data: data },
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
