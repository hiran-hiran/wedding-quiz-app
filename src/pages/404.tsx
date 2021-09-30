import { NextPage } from "next";
import Link from "next/link";

type Props = {};

const Custom404: NextPage<Props> = () => {
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <Link href="/admin/">
        <a className="mt-10 px-3 py-2 block w-full bg-fandango text-center text-white font-bold rounded-full">
          adminページ
        </a>
      </Link>
    </main>
  );
};
export default Custom404;
