"use client";

import React from "react";

interface Props {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
  onOptionClick: Function;
  questionIndex: number;
}

const SingleQuestion: React.FC<Props> = ({
  question,
  incorrect_answers,
  correct_answer,
  onOptionClick,
  questionIndex,
}) => {
  const options = [...incorrect_answers, correct_answer];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 className="text-xl font-semibold mb-4 text-black">
        {questionIndex + 1}. {question}
      </h2>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li
            className="text-black border border-gray-300 cursor-pointer p-2 rounded-md transition-colors hover:bg-blue-100 hover:shadow-2xl"
            onClick={() => onOptionClick(question, option)}
            key={index}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleQuestion;
