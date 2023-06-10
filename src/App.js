
import { useState, useTransition } from 'react';
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
const [currentQuestion,setCurrentQuestion]=useState(0); {/* this hook is used for nexting question with handleclick */}

const [showScore,setShowScore]=useState(false); {/*this is used for the score that is show 
                                                 at when the condition is end of the question  with alert msg*/}

const [score,setScore]=useState(0); {/* this is being used for setting score when right question is being clicked */}

const handleAnswerButtonClick = (isCorrect) =>{
  if(isCorrect===true){ 
    // alert("this answer is correct")
    setScore(score+1) 
  }
  const nextQuestion = currentQuestion + 1; 
  if(nextQuestion<questions.length){ {/*this logic is used for next question and when reached end of the question
                                       else condition is come into action */}
    setCurrentQuestion(nextQuestion)
  }else{
    alert("You have reached the end of the quiz")
    setShowScore(true) //this is being used for showing the class="score section" at end
  }
}

  return (
    <div className="app">
      {showScore ?(
        <div className="score-section">You scored {score} out of {questions.length}</div>
      ) : (

      <div className='all'>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion+1}</span> /{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>  {/* currentQuestion as array index   is being used*/}
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOptions) => 
             <button onClick={()=> handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
          )}
           
          
        </div>

      </div>
      )}
    </div>
  );
}

export default App;
