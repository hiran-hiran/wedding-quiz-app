import React, { VFC } from 'react'
import {
  UseFormRegister,
  UseFormRegisterReturn,
  FieldValues,
} from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  index: number
}

export const QuizListItem: VFC<Props> = ({ register, index }) => {
  return (
    <li className="p-5 border-t first:border-t-0  bg-gray-100">
      <p className="block  text-lg font-bold">{`Q. ${index}`}</p>
      <textarea
        {...register(`q${index}`)}
        id={`q${index}`}
        placeholder="問題文"
        className="mt-2 p-2 w-full"
      ></textarea>
      <div className="flex justify-end">
        <label htmlFor={`q${index}a-o`} className="font-bold text-lg">
          <input
            type="radio"
            {...register(`q${index}a`)}
            id={`q${index}a-o`}
            value="o"
            radioGroup={`q${index}a`}
            className="mr-1"
          />
          ○
        </label>
        <label htmlFor={`q${index}a-x`} className="ml-4 font-bold text-lg">
          <input
            type="radio"
            {...register(`q${index}a`)}
            id={`q${index}a-x`}
            value="x"
            radioGroup={`q${index}a`}
            className="mr-1"
          />
          ✗
        </label>
      </div>
    </li>
  )
}
