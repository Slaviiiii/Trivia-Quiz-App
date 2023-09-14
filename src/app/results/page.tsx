"use client";
import React from "react";
import { useQuizContext } from "../../context/quizContext";

const Results = () => {
  const { answers, resetAnswers } = useQuizContext();
  const totalQuestions = answers.length;
  const correctAnswers = answers.filter((answer: any) => answer.isTrue).length;
  const percentage = Number(
    ((correctAnswers / totalQuestions) * 100).toFixed(2)
  );

  const isSuccess = percentage >= 70;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-indigo-600 to-indigo-900 text-white animate-fade-in-down">
      <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-3xl font-bold mb-4">
        {percentage}%
      </div>
      <h1 className="text-4xl font-semibold mb-4">Results Page</h1>
      <div className="text-center mb-6">
        <div className={isSuccess ? "text-green-500" : "text-red-500"}>
          <p className="text-2xl">{isSuccess ? "Congratulations!" : "Oops!"}</p>
          <p className="text-lg">
            {isSuccess
              ? "You are a Quiz Master!"
              : "You could do better next time."}
          </p>
        </div>
      </div>
      <div className="w-full mx-auto">
        <div className="relative pt-1">
          <div className="flex mb-4">
            <div className="w-1/2 text-center">
              <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                Score
              </span>
              <span className="block text-3xl font-semibold">
                {correctAnswers} / {totalQuestions}
              </span>
            </div>
            <div className="w-1/2 text-center">
              <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                Percentage
              </span>
              <span className="block text-3xl font-semibold">
                {percentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <a
        onClick={() => resetAnswers()}
        href="/quiz"
        className="py-3 px-6 bg-blue-500 text-xl sm:text-2xl text-white rounded hover:bg-blue-600 transition transform hover:scale-105"
      >
        Retake Quiz
      </a>
    </main>
  );
};

export default Results;
