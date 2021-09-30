import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useGetGuestUsersQuery } from "../../../../types/generated/types";
import QuizLayout from "../../../components/quiz/QuizLayout";

const Result: NextPage = () => {
  const router = useRouter();

  const { data, loading } = useGetGuestUsersQuery({
    variables: {
      quizId: router.query.quizId,
    },
  });
  console.log(data);

  loading && (
    <QuizLayout>
      <p>Loading...</p>
    </QuizLayout>
  );

  return (
    <QuizLayout>
      <h2 className="text-2xl font-bold text-center text-gray-600">結果</h2>

      {data?.guest_user.length ? (
        <ul className="mt-3">
          {data.guest_user.map((el, i) => (
            <li className="py-3 border-t last:border-b " key={i}>
              <p>順位： {i + 1}</p>
              <p>名前： {el.name}</p>
              <p>得点： {el.point}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-10 text-gray-600">データがありません</p>
      )}
    </QuizLayout>
  );
};
export default Result;
