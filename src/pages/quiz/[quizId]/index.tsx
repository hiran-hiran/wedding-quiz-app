import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { initializeApollo } from "../../../../lib/apolloClient";
import { GET_QUIZ, GET_QUIZ_BY_ID } from "../../../../queries/query";
import {
  GetQuizByIdQuery,
  GetQuizQuery,
  useUpdateGuestUserMutation,
} from "../../../../types/generated/types";
import QuizLayout from "../../../components/quiz/QuizLayout";
import { BsX } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";

const Home: NextPage<{ data: GetQuizByIdQuery }> = ({
  data: { quiz_by_pk },
}) => {
  const router = useRouter();
  const [update_guest_user_by_pk] = useUpdateGuestUserMutation();
  const { ...quizes } = quiz_by_pk;
  const [point, setPoint] = useState(0);
  const [current, setCurrent] = useState(1);
  const [quizNode, setQuizNode] = useState<NodeListOf<Element>>();
  const [answers, setAnswers] = useState({
    q1a: "",
    q2a: "",
    q3a: "",
    q4a: "",
    q5a: "",
    q6a: "",
    q7a: "",
    q8a: "",
    q9a: "",
    q10a: "",
  });

  // console.log('point', point)
  console.log("answers", answers);

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
  ];
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
  };

  // guest user登録されてない場合はsignup画面へ
  useEffect(() => {
    const guestUserId = localStorage.getItem("quest-user-id");
    !guestUserId && router.push(`./${router.query.quizId}/signup`);
  }, []);

  // DOMから<li>の取得
  useEffect(() => {
    const qqq = document.querySelectorAll("[data-index]");
    setQuizNode(qqq);
  }, []);

  // 1問目の表示
  useEffect(() => {
    window &&
      quizNode &&
      quizNode[current].classList.remove("opacity-0", "invisible");
    window && quizNode && quizNode[current].classList.add("top-0");
  }, [quizNode]);

  const handleClick = (e) => {
    const answer = e.currentTarget.dataset.answer;
    const quizNum = e.currentTarget.dataset.quiz;
    setAnswers({ ...answers, [quizNum]: answer });

    // 合ってたらポイント追加
    if (answerArr[quizNum] === answer) {
      setPoint((prev) => (prev += 1));
    }

    if (current <= quizNode.length) {
      quizNode[current].classList.add("opacity-0", "invisible");
      if (current < quizNode.length - 1) {
        quizNode[current + 1].classList.remove("opacity-0", "invisible");
        quizNode[current + 1].classList.add("top-0");
      }
      setCurrent((prev) => (prev += 1));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const guestId = localStorage.getItem("quest-user-id");
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
    });

    data && localStorage.removeItem("quest-user-id");
    data && router.push(`./${router.query.quizId}/result`);
  };

  return (
    <QuizLayout>
      <form onSubmit={handleSubmit} className="h-full relative py-12">
        <ul className="relative h-full">
          {quizArr.map((el, i) => (
            <li
              className="flex flex-col justify-between w-full h-full absolute top-5 transition-all opacity-0 invisible"
              data-index={i + 1}
              key={i}
            >
              <p className="text-2xl font-bold text-gray-600">{el}</p>
              <div className="flex justify-center flex-col items-center mt-10">
                <div
                  className="items-center py-3 text-center cursor-pointer rounded-full w-full shadow-lg bg-green-400"
                  onClick={handleClick}
                  data-answer="o"
                  data-quiz={`q${i + 1}a`}
                >
                  <BiCircle color="white" size="1.6rem" className="mx-auto" />
                </div>
                <div
                  className="items-center py-2 text-center cursor-pointer rounded-full w-full shadow-lg mt-5 bg-red-400"
                  onClick={handleClick}
                  data-answer="x"
                  data-quiz={`q${i + 1}a`}
                >
                  <BsX color="white" size="2.1rem" className="mx-auto" />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div
          className={
            current === 10
              ? "text-center absolute top-[40%] bottom-5 w-full"
              : "hidden"
          }
        >
          <p className="text-lg font-bold text-gray-600">
            ご回答ありがとうございました
          </p>
          <button className="px-5 py-2 text-white font-bold w-full rounded-full bg-fandango shadow-sm">
            結果を見る
          </button>
        </div>
      </form>
    </QuizLayout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetQuizByIdQuery>({
    query: GET_QUIZ_BY_ID,
    variables: { id: context.params.quizId },
  });
  return {
    props: { data: data },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetQuizQuery>({
    query: GET_QUIZ,
  });

  const paths = data.quiz.map((el) => ({ params: { quizId: el.id } }));

  return { paths, fallback: false };
};
