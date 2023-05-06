import { useState } from "react";
import questionsData from "../../questions.json";
import "./Quiz.css";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const genericNameQuestion = questionsData.map(
    (generic) => generic.genericName
  );
  const brandNameChoices = questionsData.map((choice) => choice.choices);

  // Matching the answer
  // Move to next question
  const handleClick = (index) => {
    brandNameChoices[currentIndex][index] ===
      questionsData[currentIndex].brandName && setScore(score + 1);

    currentIndex < genericNameQuestion.length &&
      setCurrentIndex(currentIndex + 1);
  };

  // Shows score and try again button
  if (currentIndex === genericNameQuestion.length) {
    return (
      <div className="score-container">
        <h2>
          Your score is {score}/{genericNameQuestion.length}
        </h2>
        <p>End of quiz.</p>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setScore(0);
          }}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="question-container">
        <h2 className="generic-name">{genericNameQuestion[currentIndex]}</h2>

        {brandNameChoices[currentIndex].map((brand, index) => (
          <button
            onClick={() => handleClick(index)}
            className="drug-brands"
            key={index}
          >
            {brand}
          </button>
        ))}
      </div>
    </>
  );
};

export default Quiz;
