import React from "react"; 
import {useDrag } from "react-dnd";


const ColourInPl = ({colour}) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type : "word",
        item: {id : colour.id},
        collect : (monitor) => ({
            isDragging : !! monitor.isDragging(),
        })
  
    }))
    return (
       <div
       ref={drag}>
          {colour.pl}
       </div> 
    )
} 






export default ColourInPl; 