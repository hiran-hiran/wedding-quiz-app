import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { VFC } from 'react'
import { useForm } from 'react-hook-form'
import { GetQuizQuery, Quiz } from '../../../types/generated/types'
import { QuizListItem } from './QuizListItem'

type Props = {
  quizData: GetQuizQuery
}

export const QuizList: VFC<Props> = ({ quizData }) => {
  const { register, handleSubmit, setValue } = useForm()

  const { q1, q1a, q2, q2a } = quizData.quiz[0]

  const handlePost = (data) => {
    console.log('handlePost', data)
  }

  useEffect(() => {
    setValue('q1', q1)
    setValue('q2', q2)
  }, [quizData])

  return (
    <form className="" onSubmit={handleSubmit(handlePost)}>
      <ul className="mt-5">
        {[...Array(10)].map((el, i) => (
          <QuizListItem key={i} index={i + 1} register={register} />
        ))}
      </ul>

      <div className="text-center">
        <button className="bg-red-300 mt-10 px-5 py-2 text-white font-bold">
          登録
        </button>
      </div>
    </form>
  )
}
