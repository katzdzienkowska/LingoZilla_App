import React, { useState } from 'react'
import './quiz.css';
import horse_img from '../images/horse.png'
import sheep_img from '../images/sheep.png'
import cat_img from '../images/cat.png'
import rooster_img from '../images/rooster.png'
import rabbit_img from '../images/rabbit.png'
import turkey_img from '../images/turkey.png'
import cow_img from '../images/cow.png'
import pig_img from '../images/pig.png'
import dog_img from '../images/dog.png'



const Quiz = () => {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        {
            image: horse_img,
            text: "What animal is shown above?",
            options: [
                { id: 0, text: "Koń", isCorrect: true },
                { id: 1, text: "Owca", isCorrect: false },
                { id: 2, text: "Królik", isCorrect: false },
                { id: 3, text: "Indyk", isCorrect: false },
            ],
        },
        {
            image: pig_img,
            text: "What colour is the Pig?",
            options: [
                { id: 0, text: "Rudy", isCorrect: false },
                { id: 1, text: "Szary", isCorrect: false },
                { id: 2, text: "Czarny", isCorrect: false },
                { id: 3, text: "Różowy", isCorrect: true },
            ],
        },
        {
            image: cat_img,
            text: "What animal is shown above?",
            options: [
                { id: 0, text: "Kogut", isCorrect: false },
                { id: 1, text: "Krowa", isCorrect: false },
                { id: 2, text: "Kot", isCorrect: true },
                { id: 3, text: "Koń", isCorrect: false },
            ],
        },
        {

            image: rabbit_img,
            text: "What colour is the Rabbit?",
            options: [
                { id: 0, text: "Kolorowy", isCorrect: false },
                { id: 1, text: "Brązowy", isCorrect: false },
                { id: 2, text: "Różowy", isCorrect: false },
                { id: 3, text: "Szary", isCorrect: true },
            ],
        },
        {

            image: sheep_img,
            text: "What animal is shown above?",
            options: [
                { id: 0, text: "Owca", isCorrect: true },
                { id: 1, text: "Kogut", isCorrect: false },
                { id: 2, text: "Świnia", isCorrect: false },
                { id: 3, text: "Pies", isCorrect: false },
            ],
        },
    ]
    // Click answer and set score
    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResults(true);
        }
    };

    // Reset game
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };



    return (

        <div className='quiz'>
            <h1>LingoZilla Quiz</h1>
            <h3>Score: {score}</h3>


            {/* Show results or show the question game  */}
            {showResults ? (
                <div className='final-result' >
                    <h1>Final Results</h1>
                    <h2>
                        {score} out of {questions.length} correct - (
                        {(score / questions.length) * 100} %)
                    </h2>
                    <button onClick={() => restartGame()}>Play Again!</button>
                </div>
            ) : (
                <div className='question-card'>
                    <h2>
                        Question: {currentQuestion + 1} out of {questions.length}
                    </h2>
                    <img className='question-image' src={questions[currentQuestion].image}></img>
                    <h3 className='question-text'> {questions[currentQuestion].text}</h3>

                    {/* List of answers  */}
                    <ul>
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li
                                    key={option.id}
                                    onClick={() => optionClicked(option.isCorrect)} >
                                    {option.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}





export default Quiz;

