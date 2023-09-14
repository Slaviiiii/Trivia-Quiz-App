"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { getQuizzes } from "../services/getData";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    getQuizzes().then((data) => {
      setQuizzes(data["results"]);
    });
  }, []);

  const updateAnswers = (question, option) => {
    setAnswers((prevAnswers) => {
      const quizIndex = quizzes.findIndex((quiz) => quiz.question === question);

      if (quizIndex !== -1) {
        const quiz = quizzes[quizIndex];
        const isTrue = quiz.correct_answer === option;
        const updatedAnswer = { place: quizIndex, isTrue };
        const updatedAnswers = [...prevAnswers, updatedAnswer];

        return updatedAnswers;
      }

      return prevAnswers;
    });
  };

  const resetAnswers = () => {
    setAnswers([]);
  };

  const contextValues = {
    quizzes,
    answers,
    updateAnswers,
    resetAnswers,
    timeLeft,
    setTimeLeft,
  };

  return (
    <QuizContext.Provider value={contextValues}>
      {children}
    </QuizContext.Provider>
  );
};

export function useQuizContext() {
  return useContext(QuizContext);
}
