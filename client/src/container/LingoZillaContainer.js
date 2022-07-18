import React from 'react' 
import AppAbout from '../components/AppAbout';
import Header from '../components/Header';
import Lesson1 from '../components/Lesson1';
import {Link} from "react-router-dom" ; 
import styled from "styled-components";
import './Lingo.css'







const LingoZilla = () => { 







    return (
        <section  className='id1' >

           <ul className='box1'>
           <Link to = "/lesson1" > Lesson1 </Link> 

           </ul>
        
        <ul className='box2'>

            <Link to = "/lesson2" > Lesson2 </Link>
        </ul>

        <ul className='box3'>

            

            <Link to = "/lesson3" > Lesson3 </Link>

        </ul>

          
           
         </section>
    )

}


export default LingoZilla; 
