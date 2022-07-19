import React from "react"; 
import {useDrag } from "react-dnd";



const WordInPl = ({word}) => {

   const [{isDragging}, drag] = useDrag(() => ({
      type : "word",
      item: {id : word.id},
      collect : (monitor) => ({
          isDragging : !! monitor.isDragging(),
      })

  }))


    return (
       <div
       ref={drag}>
          {word.pl} 
       </div>
    )
} 






export default WordInPl; 