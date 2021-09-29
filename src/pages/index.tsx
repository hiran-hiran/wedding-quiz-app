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
          quizページ
        </a>
      </Link>
    </main>
  );
};
export default Home;
