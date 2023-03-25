import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizQuestion = () => {
  const quizQuestion = useLoaderData();
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-2xl font-semibold text-center mt-5">
          <span className="text-[#f53b57]">{quizQuestion.data.name}</span> quiz
          questions.
        </h1>
      </div>
      <div className="mt-10">
        {quizQuestion.data.questions.map((question) => (
          <Question key={question.id} data={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
