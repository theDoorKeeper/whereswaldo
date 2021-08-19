import { useState } from 'react'
import React from 'react '

function Caroussel() {
     const [componentNumber, setComponentNumber] = useState(1) 

     const goRight = () =>{
         setComponentNumber(prev=>{
             if (prev+1 > 2 ){
                 return prev
             }
             return prev+1
         })
     };

     const goLeft = () =>{
        setComponentNumber(prev=>{
            if (prev-1 < 1 ){
                return prev
            }
            return prev-1
        })
    };

    return (
        <div>
            
        </div>
    )
}

export default Caroussel
