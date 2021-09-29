import React from "react";
import { useEffect } from "react";
import { VFC } from "react";
import { useForm } from "react-hook-form";
import {
  GetQuizQuery,
  useUpdateQuizMutation,
} from "../../../types/generated/types";
import { QuizListItem } from "./QuizListItem";

type Props = {
  quizData: GetQuizQuery;
};

export const QuizList: VFC<Props> = ({ quizData }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [update_quiz_by_pk] = useUpdateQuizMutation();

  const {
    id,
    created_at,
    title,
    q1,
    q1a,
    q2,
    q2a,
    q3,
    q3a,
    q4,
    q4a,
    q5,
    q5a,
    q6,
    q6a,
    q7,
    q7a,
    q8,
    q8a,
    q9,
    q9a,
    q10,
    q10a,
  } = quizData.quiz[0];

  const handlePost = async (data) => {
    await update_quiz_by_pk({
      variables: {
        id,
        q1: data.q1,
        q1a: data.q1a,
        q2: data.q2,
        q2a: data.q2a,
        q3: data.q3,
        q3a: data.q3a,
        q4: data.q4,
        q4a: data.q4a,
        q5: data.q5,
        q5a: data.q5a,
        q6: data.q6,
        q6a: data.q6a,
        q7: data.q7,
        q7a: data.q7a,
        q8: data.q8,
        q8a: data.q8a,
        q9: data.q9,
        q9a: data.q9a,
        q10: data.q10,
        q10a: data.q10a,
      },
    });
  };

  useEffect(() => {
    setValue("q1", q1);
    setValue("q2", q2);
    setValue("q3", q3);
    setValue("q4", q4);
    setValue("q5", q5);
    setValue("q6", q6);
    setValue("q7", q7);
    setValue("q8", q8);
    setValue("q9", q9);
    setValue("q10", q10);
    setValue("q1a", q1a);
    setValue("q2a", q2a);
    setValue("q3a", q3a);
    setValue("q4a", q4a);
    setValue("q5a", q5a);
    setValue("q6a", q6a);
    setValue("q7a", q7a);
    setValue("q8a", q8a);
    setValue("q9a", q9a);
    setValue("q10a", q10a);
  }, [quizData]);

  return (
    <form className="" onSubmit={handleSubmit(handlePost)}>
      <ul className="mt-5 shadow-lg">
        {[...Array(10)].map((el, i) => (
          <QuizListItem key={i} index={i + 1} register={register} />
        ))}
      </ul>

      <div className="text-center">
        <button className="block w-full bg-fandango mt-8 p-3 text-center text-white font-bold rounded-full shadow-lg">
          保存
        </button>
      </div>
    </form>
  );
};
