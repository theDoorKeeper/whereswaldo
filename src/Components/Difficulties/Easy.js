import React from 'react'
import styled, { keyframes } from 'styled-components'
import Vash from '../../assets/Vash.webp'
import En from '../../assets/En.png'
import Dio from '../../assets/Dio.webp'



const rotateY = keyframes`
     0% {
        transform: rotateY(90deg)
    }
    80% {
        transform: rotateY(-10deg)
    }
    100% {
        transform: rotateY(0)
    }

`

const DifficultyMenu = styled.div.attrs(props => ({
    style: {
        display : (props.number === 1) ? 'flex' : 'none',
         },
     }))`
    height : 700px;
    width  : 800px;
    background : #292d3e ;
    border-radius : 30px;
    margin-top : 3rem;
    cursor  : auto;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin-left : auto;
    margin-right :auto;
    animation-name: ${rotateY};
    animation-duration: 0.5s;
`

const CharList = styled.ul`
    display : flex;
    flex-direction : column;
    gap : 0.8rem;
    width : 80%;

`
const Char = styled.li`
     width : 100%;
     display : flex ;
    justify-content :space-between;
    font-size : 3rem;
     cursor : pointer ;
     color : #191818;
     border-bottom : grey 1px solid ;
    &:hover{
        color : #9b1427;
    }

`

const CharImg = styled.img`
    height : 12rem;
    &:hover{
    scale : 1.2;
    }
   
`

const DiffcultyBtn = styled.button`
    height : 3rem;
    width : 20%;
    border-radius : 30px;
    border : none ;
    background: #00ff41;
    color : #191818  ;
    font-size : 2rem;
    font-weight : bold;
    text-align : center ;
    cursor : pointer ;
    &:hover{
     background : #008f11;
     scale : 1.05;
    }
`

function Easy(props) {
    const {handleClick, number} = props;
    
    return (
        <DifficultyMenu number={number}>    
        <DiffcultyBtn onClick={handleClick}>Easy</DiffcultyBtn>
        <CharList>
        <Char>
        <h4>En</h4> <CharImg src={`${En}`}/>
        </Char>

        <Char>
        <h4>Vash</h4> <CharImg src={`${Vash}`}/>
        </Char>

        <Char>
        <h4>Dio</h4> <CharImg src={`${Dio}`}/>
        </Char>
        </CharList>
     </DifficultyMenu>  
    )
}

export default Easy
