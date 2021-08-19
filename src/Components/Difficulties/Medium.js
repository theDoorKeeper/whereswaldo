import React from 'react'
import styled from 'styled-components'
import Spike from '../../assets/Spike.png'
import Tom from '../../assets/Tom.png'
import Edward from '../../assets/Edward.webp'

const DifficultyMenu = styled.div.attrs(props => ({
    style: {
        display : (props.number === 2) ? 'flex' : 'none',
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
`

const CharList = styled.ul`
    display : flex;
    flex-direction : column;
    gap : 0.8rem;
    width : 80%;

`
const Char = styled.li`
     width : 100%;
     display : -webkit-box ;
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
    width : auto;
    &:hover{
    scale : 1.2;
    }
   
`

const DiffcultyBtn = styled.button`
    height : 3rem;
    width : 20%;
    border-radius : 30px;
    border : none ;
    background: orange;
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

function Medium(props) {
    const {handleClick} = props;
    
    return (
        <DifficultyMenu>    
        <DiffcultyBtn onClick={handleClick}>Medium</DiffcultyBtn>
        <CharList>
        <Char>
        <h4>Edward Elric</h4> <CharImg src={`${Edward}`}/>
        </Char>

        <Char>
        <h4>Spike</h4> <CharImg src={`${Spike}`}/>
        </Char>

        <Char>
        <h4>Tom</h4> <CharImg src={`${Tom}`}/>
        </Char>
        </CharList>
     </DifficultyMenu>  
    )
}

export default Medium
