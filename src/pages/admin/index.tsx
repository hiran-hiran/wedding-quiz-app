import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import {
  useGetAdminUserQuery,
  useGetQuizQuery,
} from "../../../types/generated/types";
import AdminLayout from "../../components/admin/AdminLayout";
import LoginInfo from "../../components/admin/LoginInfo";
import { QuizList } from "../../components/admin/QuizList";
import { AiFillHome } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

// type Props = {}

const Home: NextPage = () => {
  const { data: adminData, loading: adminLoading } = useGetAdminUserQuery();
  const { data: quizData, loading: quizLoading } = useGetQuizQuery({
    fetchPolicy: "cache-and-network",
  });

  return (
    <AdminLayout>
      <h1>
        <AiFillHome size="2em" className="mx-auto text-gray-600" title="Home" />
      </h1>
      {adminLoading ? (
        <div className="mt-10 text-center text-2xl text-gray-500">
          Loading...
        </div>
      ) : (
        <LoginInfo data={adminData?.admin_user} />
      )}

      <div className="mt-10">
        {/* <h2 className="text-lg font-bold text-gray-500">クイズ詳細</h2> */}
        <LoginInfo data={quizData?.quiz} />

        <Link href={`/quiz/${quizData?.quiz[0].id}/`}>
          <a className="flex items-center justify-center w-1/2 mt-4 ml-auto text-sm text-white font-bold rounded-full bg-gray-500">
            クイズを見る
            <BsArrowRightShort size="2rem" />
          </a>
        </Link>
        {quizData && <QuizList quizData={quizData} />}
      </div>
    </AdminLayout>
  );
};
export default Home;
