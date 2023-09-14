"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SingleQuestion from "./singleQuestion/page";
import { useQuizContext } from "../../context/quizContext";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { quizzes, updateAnswers } = useQuizContext();

  const handleRedirect = () => {
    router.push("/results");
  };

  const handleOptionClick = (question: string, option: string) => {
    updateAnswers(question, option);

    if (currentQuestion === quizzes.length - 1) {
      handleRedirect();
    } else {
      setCurrentQuestion((state) => state + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 flex flex-col items-center justify-center py-8">
      {quizzes.length > 0 && (
        <SingleQuestion
          key={currentQuestion}
          {...quizzes[currentQuestion]}
          onOptionClick={handleOptionClick}
          questionIndex={currentQuestion}
        />
      )}
    </div>
  );
}
