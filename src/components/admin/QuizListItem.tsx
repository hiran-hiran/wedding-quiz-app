import React, { VFC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { BsX } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

type Props = {
  register: UseFormRegister<FieldValues>;
  index: number;
};

export const QuizListItem: VFC<Props> = ({ register, index }) => {
  return (
    <li className="p-5 bg-white ">
      <p className="block text-sm text-gray-500 text-lg font-bold">{`Q. ${index}`}</p>
      <textarea
        {...register(`q${index}`)}
        id={`q${index}`}
        placeholder="問題文"
        className="mt-2 p-2 w-full text-lg border-b text-gray-600"
      ></textarea>
      <div className="flex items-center justify-end">
        <p className="mr-4 text-sm font-bold text-gray-500">答え</p>
        <label
          htmlFor={`q${index}a-o`}
          className="flex items-center font-bold text-lg"
        >
          <input
            type="radio"
            {...register(`q${index}a`)}
            id={`q${index}a-o`}
            value="o"
            radioGroup={`q${index}a`}
            className="mr-2"
          />
          <IconContext.Provider value={{ color: "#1ec02b", size: "1.1em" }}>
            <BiCircle />
          </IconContext.Provider>
        </label>
        <label
          htmlFor={`q${index}a-x`}
          className="flex items-center ml-4 font-bold text-lg"
        >
          <input
            type="radio"
            {...register(`q${index}a`)}
            id={`q${index}a-x`}
            value="x"
            radioGroup={`q${index}a`}
          />
          <IconContext.Provider
            value={{
              color: "red",
              size: "1.5em",
            }}
          >
            <BsX />
          </IconContext.Provider>
        </label>
      </div>
    </li>
  );
};
