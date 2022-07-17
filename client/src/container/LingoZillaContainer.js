import React from 'react' 
import AppAbout from '../components/AppAbout';
import Header from '../components/Header';
import Lesson1 from '../components/Lesson1';
import {Link} from "react-router-dom" ; 



const LingoZilla = () => { 







    return (
        <section>

           
            <Link to = "/lesson1" > Lesson1 </Link>

            <Link to = "/lesson2" > Lesson2 </Link>

            <Link to = "/lesson3" > Lesson3 </Link>
          
           
         </section>
    )

}


export default LingoZilla; 