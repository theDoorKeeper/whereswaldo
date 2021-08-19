import { useState } from 'react'
import React from 'react'
import styled from 'styled-components';
import Easy from './Difficulties/Easy';
import Medium from './Difficulties/Medium';


const Carousel = styled.div`
    display : flex; 
    height : 1000px;
    width : 1200px;
    border: black 1px solid;
    margin : auto

`


function Caroussel() {
     const [componentNumber, setComponentNumber] = useState(1) 

     const goRight = () =>{
         setComponentNumber(prev=>{
             if (prev+1 > 2 ){
                 return prev-1
             }
             return prev+1
         })
     };

     const goLeft = () =>{
        setComponentNumber(prev=>{
            if (prev-1 < 1 ){
                return prev+1
            }
            return prev-1
        })
    };

    return (
        <Carousel>
            <button onClick={goLeft}> - </button>
            <Easy number={componentNumber}/>
            <Medium number={componentNumber}/>
            <button onClick={goRight}> + </button>
        </Carousel>
    )
}

export default Caroussel
