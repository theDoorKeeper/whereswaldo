import { useState } from 'react'
import React from 'react '
import Easy from './Difficulties/Easy';
import Medium from './Difficulties/Medium';

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
            <button onClick={goLeft}> - </button>
            <Easy number={componentNumber}/>
            <Medium number={componentNumber}/>
            <button onClick={goRight}> + </button>
        </div>
    )
}

export default Caroussel
