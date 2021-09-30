import React, { VFC } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const QuizLayout: VFC<Props> = ({ children }) => {
  return (
    <>
      <main className="max-w-3xl mx-auto px-5 py-10 h-screen bg-gray-100">
        <div className="mx-auto max-w-screen-sm h-full">{children}</div>
      </main>
    </>
  );
};

export default QuizLayout;
