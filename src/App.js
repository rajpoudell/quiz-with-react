
import { useState } from 'react';
import './index.css'

function App() {
  const questions = [
    {
      questionText:'What is the capital of France?',
      answerOptions:[
        
         { answerText:'New York',isCorrect:false},
          {answerText:'London',isCorrect:false},
          {answerText:'Paris',isCorrect:true},
          {answerText:'Dublin',isCorrect:false},
      
      ],
    },
    {
      questionText:'Who is CEO of Tesla?',
      answerOptions: [
        
         { answerText:'Jeff Bezos',isCorrect:false },
          { answerText:'Bill Gates',isCorrect:false },
          { answerText:'Elon Musk',isCorrect:true },
          { answerText:'Tony Stark',isCorrect:false },
        
      ],
    },
    {
      questionText:'The Iphone was created by which company?',
      answerOptions:[
        
         { answerText:'Apple',isCorrect:true},
          {answerText:'Intel',isCorrect:false},
          {answerText:'Amazon',isCorrect:false},
          {answerText:'Microsoft',isCorrect:false},
        
      ],
    },
    {
      questionText:'THow many Harry Potter Books are there?',
      answerOptions:[
        
         { answerText:'1',isCorrect:false},
          {answerText:'4',isCorrect:false},
          {answerText:'6',isCorrect:false},
          {answerText:'7',isCorrect:true},
        
      ],
    },
  ];
const [currentQuestion,setCurrentQuestion]=useState(0);

const handleAnswerButtonClick = () =>{
  const nextQuestion = currentQuestion + 1;
  setCurrentQuestion(nextQuestion)
}

  return (
    <div className="app">
      {false ?(
        <div className="score-section">You scored {} out of {questions.length}</div>
      ) : (

      <div className='all'>
        <div className="question-section">
          <div className="question-count">
            <span>Question 1</span> /{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOptions) => 
             <button onClick={handleAnswerButtonClick}>{answerOptions.answerText}</button>
          )}
           
          
        </div>

      </div>
      )}
    </div>
  );
}

export default App;
