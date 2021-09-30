// import { useQuery } from '@apollo/client'
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
// import { initializeApollo } from '../../../../lib/apolloClient'
// import { GET_QUIZ, GET_QUIZ_BY_ID } from '../../../../queries/query'
import {
  // GetQuizByIdQuery,
  // GetQuizQuery,
  useInsertGuestUserMutation,
} from "../../../../types/generated/types";
import QuizLayout from "../../../components/quiz/QuizLayout";
import { useForm } from "react-hook-form";

const Signup: NextPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();
  const [insert_guest_user] = useInsertGuestUserMutation();

  const handleSignup = async (data) => {
    const res = await insert_guest_user({
      variables: {
        name: data.name,
        seat_no: data.seat_no,
        quiz_id: router.query.quizId,
      },
    });
    localStorage.setItem("quest-user-id", res.data.insert_guest_user_one.id);

    router.push(`../${router.query.quizId}/`);
  };

  return (
    <QuizLayout>
      <form onSubmit={handleSubmit(handleSignup)}>
        <div className="">
          <label htmlFor="name">名前</label>
          <input
            type="text"
            {...register("name")}
            id="name"
            placeholder="藤井慶太"
            required
            className="mt-2 p-2 w-full"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="seat_no">席番号</label>
          <input
            type="text"
            {...register("seat_no")}
            id="seat_no"
            placeholder="A-10"
            className="mt-2 p-2 w-full"
          />
        </div>

        <div className="text-center">
          <button className="mt-10 px-5 py-2 text-white font-bold w-full rounded-full bg-fandango shadow-sm">
            スタート
          </button>
        </div>
      </form>
    </QuizLayout>
  );
};
export default Signup;
