
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'



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

const Menu = styled.ul.attrs(props => ({
    style: {
        display : props.displayMenu ? 'flex' : 'none',
        left :  props.xpos,
        top :  props.ypos,
    },
  }))`
  position : absolute;
  list-style : none ; 
  flex-direction : column;
  justify-content: space-between;
  height :200px;
  cursor : pointer;
  padding : 0;
  border : 1px tomato solid;
  animation-name: ${rotateY};
  animation-duration: 1s;
  background-color : #292b2c ;
  border-radius : 15px
  `

const MenuItem = styled.li`
    border-radius : 15px;
    width : 142px; 
    height : 66px;
    display : flex ; 
    align-items : center ;
    justify-content : center ;
    color : lightgrey ;
    &:hover {
        color : tomato;
    }
    
`

function CharMenu(props) {
    const {displayMenu, xpos, ypos, setMenuDisplay, dbChars, foundChars, setFoundChars, setHasClicked, setHasFoundChar} = props;
    const [displayedChars, setDisplayedChars] = useState([]);
    const checkForCoordinates = (xPos, yPos, maxX, maxY, minX, minY)=>{
        if ( (xPos >= minX && xPos <= maxX) && (yPos >= minY && yPos <= maxY) ){
            return true 
        }
        else return false 
    }


    
    useEffect(() => {
    const checkChar = (name) => {
        const tempArray  = Object.entries(dbChars);     
        tempArray.forEach(instance=>{
            const char = instance[1];
            const charName = char.name;

            if(checkForCoordinates(xpos, ypos, char.maxX, char.maxY, char.minX, char.minY ) && (charName === name)){
               setHasFoundChar(false)
            if( !foundChars.includes(charName) ){
                setFoundChars( thisArray => [...thisArray , charName] );
                setHasFoundChar(charName);
                setTimeout( ()=>{
                    setHasFoundChar(false);
                },1000)
                
                }   

            }
        })


    }


    const handleClick = (e) =>{
        e.stopPropagation();
        setMenuDisplay(false);
        setHasClicked(true);
        checkChar(e.target.textContent);
        setTimeout(()=>{
            setHasClicked(false)
        },800)
    }



        if(dbChars){
        setDisplayedChars(
            Object.keys(dbChars).map((char, i )=>{         
                return (
                    <MenuItem onClick={handleClick} key={i}>
                    {char}
                  </MenuItem>
                )
            })
        )
    }

    }, [dbChars,setMenuDisplay,xpos,ypos,foundChars,setFoundChars,setHasFoundChar,setHasClicked])

    return (
        <Menu displayMenu={displayMenu} xpos={xpos} ypos={ypos}>
            {displayedChars}                
        </Menu>
    )
}

export default CharMenu
