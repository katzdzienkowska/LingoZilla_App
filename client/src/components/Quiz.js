import React from 'react'
import horse_img from '../images/horse.png'
import sheep_img from '../images/sheep.png'
import cat_img from '../images/cat.png'
import rooster_img from '../images/rooster.png'
import rabbit_img from '../images/rabbit.png'
import turkey_img from '../images/turkey.png'
import cow_img from '../images/cow.png'
import pig_img from '../images/pig.png'
import dog_img from '../images/dog.png'

const quiz = () => {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        {
            image: horse_img,
            text: "What animal is shown above?",
            options: [
                { id: 0, text: "", isCorrect: false },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: true },
            ],
        },
        {
            image: pig_img,
            text: "What colour is the Pig?",
            options: [
                { id: 0, text: "", isCorrect: false },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: true },
            ],
        },
        {
            image: cat_img,
            text: "What animal is shown above?",
            options: [
                { id: 0, text: "", isCorrect: false },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: true },
            ],
        },
        {

            image: rabbit_img,
            text: "What colour is the Rabbit?",
            options: [
                { id: 0, text: "", isCorrect: false },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: true },
            ],
        },
        {

            image: sheep_img,
            text: "What animal is shown above?",
            options: [
                { id: 0, text: "", isCorrect: false },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: true },
            ],
        },
    ]



    return (

        <div>

            <p>

            </p>

        </div>
    )



}


export default quiz;

