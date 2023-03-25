import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizQuestion = () => {
  const quizQuestion = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mt-5">
        <span className="text-[#f53b57]">{quizQuestion.data.name}</span> quiz
        questions.
      </h1>
    </div>
  );
};

export default QuizQuestion;
