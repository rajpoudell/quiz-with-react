
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
      questionText:'The iphone was created by which company?',
      answerOptions:[
        
         { answerText:'Apple',isCorrect:true},
          {answerText:'Intel',isCorrect:false},
          {answerText:'Amazon',isCorrect:false},
          {answerText:'Microsoft',isCorrect:false},
        
      ],
    },
  ];


  // console.log(questions)
  return (
    <div className="app">
      
    </div>
  );
}

export default App;
