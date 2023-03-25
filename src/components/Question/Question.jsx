import React from "react";
import { toast } from "react-toastify";

const Question = ({ data }) => {
  const { question, options, correctAnswer } = data;
  const checkAnswer = (option) => {
    if (option === correctAnswer) {
      toast("Congratulations! Your answer is correct.");
    } else {
      toast("Sorry! Try again.");
    }
  };
  return (
    <div className="mb-5 border p-8 rounded-lg shadow-md">
      <div className="">
        <h1 className="mb-4 text-lg">
          <span className="font-semibold">Question:</span>{" "}
          {question.slice(3, -4)}
        </h1>
      </div>
      <div className="cursor-pointer text-base">
        {options.map((option, index) => (
          <p onClick={() => checkAnswer(option)} className="mb-2" key={index}>
            {index + 1}: {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Question;
