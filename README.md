# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

.......................................................................................


Quiz App Documentation
This is a quiz application built using React. It displays a set of questions and allows the user to select an answer for each question. The score is calculated based on the number of correct answers.

Components
The application consists of a single component:

1. App
The App component is the main component that renders the quiz. It maintains the state of the current question, score, and whether to show the final score.

`State
questions: An array of objects representing the questions and their answer options.
currentQuestion: Represents the index of the current question.
showScore: Determines whether to show the final score.
score: Keeps track of the user's score.
Event Handlers
handleAnswerButtonClick: This event handler is called when the user selects an answer for a question. It updates the score if the answer is correct and moves to the next question. If there are no more questions, it shows the final score.
Rendering
The render function of the App component conditionally renders different sections based on the value of showScore.

If showScore is true, it renders the final score section, displaying the user's score out of the total number of questions.
If showScore is false, it renders the quiz section, which includes the current question, the question count, the question text, and the answer options.`


JSX Structure
The JSX structure of the App component is as follows:

Jsx

`<div className="app">
  {showScore ? (
    <div className="score-section">You scored {score} out of {questions.length}</div>
  ) : (
    <div className='all'>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion+1}</span> / {questions.length}
        </div>
        <div className="question-text">{questions[currentQuestion].questionText}</div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOptions) => (
          <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
            {answerOptions.answerText}
          </button>
        ))}
      </div>
    </div>
  )}
</div>`
Usage
To use this quiz app, you need to have React installed in your project. You can follow these steps:

Create a new React project or navigate to your existing React project.
Replace the content of your App.js file with the provided code.
Create an index.css file in the same directory as App.js and add your own styles.
Run your React development server (npm start or yarn start).
Visit the app in your browser to take the quiz.
That's it! You now have a quiz app where users can answer questions and see their final score.








