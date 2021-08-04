import React from 'react'
import styled from 'styled-components'
import Vash from '../assets/Vash.webp'
import En from '../assets/En.png'
import Dio from '../assets/Dio.webp'

const Overlay = styled.div`
    position: fixed; 
  display: flex; 
  justify-content :center;
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.8); 
  z-index: 2; 
  cursor: pointer; 
`

const DifficultyMenu = styled.div`
    height : 700px;
    width  : 800px;
    background : #393737; ;
    border-radius : 30px;
    margin-top : 3rem;
    cursor  : auto;
    display : flex ;
    flex-direction : column;
    justify-content : center;
    align-items : center;
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
    background: #7d7d7d;
    color : green ;
    font-size : 2rem;
    font-weight : bold;
    text-align : center ;
    cursor : pointer ;
    &:hover{
     scale : 1.1;
    }

`

function DifficultyScreen() {
    return (
        <Overlay>
            <DifficultyMenu>
                <DiffcultyBtn> Easy </DiffcultyBtn>
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
        </Overlay>
    )
}

export default DifficultyScreen
