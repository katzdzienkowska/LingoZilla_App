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
                { id: 3, text: "", isCorrect: false },
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

