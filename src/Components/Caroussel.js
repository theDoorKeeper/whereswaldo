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
    margin-left : auto;
    margin-right: auto ;
    justify-content : center;

`
const ArrowButton = styled.button`
    height : 120px;
    width : 120px;
    text-align:center;
    align-self : center;
    background : none ;
    font-size : 5rem;
    border-radius : 50% ;
    border : 1px  #191818 solid ;
    color :  black ;
    background-color : #292d3e;
    font-weight: bolder;
    &:hover{
        color: black;
        background :  #191818; 
        cursor : pointer;
    }
    
    


`

function Caroussel(props) {
    const {handleClick} = props;
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
            <ArrowButton onClick={goLeft}> &larr; </ArrowButton>
            <Easy number={componentNumber} handleClick={handleClick}/>
            <Medium number={componentNumber}  handleClick={handleClick}/>
            <ArrowButton onClick={goRight}> &rarr; </ArrowButton>
        </Carousel>
    )
}

export default Caroussel
