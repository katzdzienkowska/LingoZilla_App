import { useEffect, useState } from "react"
import horse from '../images/horse.png'
import sheep from '../images/sheep.png'
import rooster from '../images/rooster.png'
import cow from '../images/cow.png'
import pig from '../images/pig.png'
import dog from '../images/dog.png'
import horse_pl from '../images/horse_pl.png'
import sheep_pl from '../images/sheep_pl.png'
import rooster_pl from '../images/rooster_pl.png'
import cow_pl from '../images/cow_pl.png'
import pig_pl from '../images/pig_pl.png'
import dog_pl from '../images/dog_pl.png'
import cover from '../images/farm.png'
import './game1mc.css';

const cards = [
    {
        id: 'horse_match',
        img: horse
    },
    {
        id: 'sheep_match',
        img: sheep
    },
    {
        id: 'rooster_match',
        img: rooster
    },
    {
        id: 'cow_match',
        img: cow
    },
    {
        id: 'pig_match',
        img: pig
    },
    {
        id: 'dog_match',
        img: dog
    },
    {
        id: 'horse_match',
        img: horse_pl
    },
    {
        id: 'sheep_match',
        img: sheep_pl
    },
    {
        id: 'rooster_match',
        img: rooster_pl
    },
    {
        id: 'cow_match',
        img: cow_pl
    },
    {
        id: 'pig_match',
        img: pig_pl
    },
    {
        id: 'dog_match',
        img: dog_pl
    }
];

const GameOne = () => {
    const cardCover = cover; // blank image
    const [cardsList, setCardsList] = useState([]);
    const [cardPicked, setCardPicked] = useState([]);
    const [cardPickedId, setCardPickedId] = useState([]);
    const [score, setScore] = useState(0);
    const [openCards, setOpenCards] = useState([]);

    const gameReady = () => {
        const shuffledArray = shuffleArray(cards)
        setCardsList(shuffledArray)
    };

    useEffect(() => {
        gameReady()
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
        // console.log(array)
        return array;
    };

    const flipCard = (card, index) => {
        // card selected check
        console.log(card, index);
        if (cardPickedId?.length === 1 && cardPickedId[0] === index) {
            return;
        };

        // conditional statements:
        if (cardPicked?.length < 2) {

            setCardPicked(cardPicked => cardPicked?.concat(card))
            setCardPickedId(cardPickedId => cardPickedId?.concat(index))

            if (cardPicked?.length === 1) {
                // are cards the same check
                if (cardPicked[0].id === card.id) {
                    setScore(score => score + 2)
                    setOpenCards(openCards => openCards?.concat([cardPicked[0], card]))
                }
                setTimeout(() => {
                    setCardPickedId([])
                    setCardPicked([])
                }, 800);
            };
        };
    };

    const onCardSelect = (card, index) => {
        return cardPickedId?.includes(index) || openCards?.includes(card)
    };

    const playAgain = () => {
        shuffleArray(cards)
        setCardPickedId([])
        setCardPicked([])
        setScore(0)
        setOpenCards([])
    };

    return (
        <div>
            <div className='memory-game-container'>
                <h2>Memory Game</h2>
                <p>Game 1 Memory Game description placeholder</p>
                <div className="memory-game-cards">
                    {cardsList?.map((card, index) => {
                        return (
                            <div className='cardImage' key={index} onClick={() => flipCard(card, index)}>
                                <img className="image" src={onCardSelect(card, index) ? card.img : cardCover} alt='cover image'/>
                            </div>
                        )
                    })}
                </div>
                <h3>Score: {score}</h3><button onClick={playAgain}>Play again?</button>
            </div>
        </div>
    );
};

export default GameOne; 