import React, { useState } from "react";

function Quiz() {

    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    
    const  questions = [
        'What is ReactJS?',
        'Who created React.js?',
        'In which language is React.js written?',
        'A state in React.js is also known as?',
        'Which of the following is used in React.js to increase performance?'
        ];

    const answers = [
        'JS library',
        'Jordan Walke',
        'JavaScript',
        'The internal storage of the component',
        'Virtual DOM'
        ];

  const handleSubmit = ()=>{
    const answer = window.prompt("Enter your answer: ");
    const correctAnswer = answers[currentQuestionIndex];

    if (answer.localeCompare(correctAnswer, undefined, { sensitivity: 'base' }) === 0) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const displayScore = () => {
    alert(`Quiz Complete!\nYour score: ${score}`);
  };

    return (
      <div style={{marginTop: "10rem"}}>
        {!(currentQuestionIndex === questions.length) ? (
          <div>
            <h2>{currentQuestionIndex + 1}. {questions[currentQuestionIndex]}</h2>
            <button type="submit" onClick={handleSubmit}>Answer</button>
          </div>
        ) : (
          <div>
            <h2>Quiz is over!</h2>
            <button onClick={displayScore}>Display Score</button>
          </div>
        )}
      </div>
    );
}

export default Quiz;
