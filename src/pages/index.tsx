import { NextPage } from "next";
import Link from "next/link";

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <main className="flex flex-col justify-center h-screen max-w-3xl mx-auto px-5 py-10">
      <Link href="/admin/">
        <a className="block w-full bg-fandango mb-8 p-3 text-center text-white font-bold rounded-full">
          adminページ
        </a>
      </Link>
      <Link href="/quiz/">
        <a className="block w-full bg-fandango mb-8 p-3 text-center text-white font-bold rounded-full">
          {/* <Link href="/quiz/">
        <a className="block bg-red-300 mt-10 px-3 py-2 text-center text-white font-bold">
>>>>>>> fcc806c81adf36a771766bc0cd54b082191c76aa
          quizページ */}
        </a>
      </Link>
    </main>
  );
};
export default Home;
