import React from 'react' 
import {Link} from "react-router-dom" ; 

const NavBar = () => { 

    return (

        <ul>
            <li>
                <Link to = "/" > Home </Link>
            </li>
            <ul className='box1'>
                <Link to="/lesson1" > Lesson1 </Link>
            </ul>
            <ul className='box2'>
                <Link to="/lesson2" > Lesson2 </Link>
            </ul>
            <ul className='box3'>
                <Link to="/lesson3" > Lesson3 </Link>
            </ul>
            <ul className='quiz-box'>
                <Link to="/quiz" > Quiz </Link>
            </ul>
            <li>
            <Link to = "/testimonies" > Testimonies </Link>
            </li>
        </ul>
    )

}


export default NavBar; 