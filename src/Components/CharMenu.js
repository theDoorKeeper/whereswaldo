import React, { useState } from 'react'
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

  `

const MenuItem = styled.li`
    width : 142px;
    border-top : 1px tomato solid;
    background-color : #292b2c ;
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
    const {displayMenu, xpos, ypos, setMenuDisplay, dbChars} = props;
    const [foundChars, setFoundChars] = useState([]) ;
    const [displayedChars, setDisplayedChars] = useState([]);

    const checkForCoordinates = (xPos, yPos, maxX, maxY, minX, minY)=>{
        if ( (xPos >= minX && xPos <= maxX) && (yPos >= minY && yPos <= maxY) ){
            return true 
        }
        else return false 
    }

    const checkChar = (name) => {
        const tempArray  = Object.entries(dbChars);     

        tempArray.forEach(instance=>{
            const char = instance[1];
            const charName = char.name;

            if(checkForCoordinates(xpos, ypos, char.maxX, char.maxY, char.minX, char.minY ) && (charName === name)){
                if( !foundChars.includes(charName) ){
               setFoundChars( thisArray => [...thisArray , charName] )
                }

            }
        })


    }

    const handleClick = (e) =>{
        e.stopPropagation();
        setMenuDisplay(false);
        checkChar(e.target.textContent);
    }



    return (
        <Menu displayMenu={displayMenu} xpos={xpos} ypos={ypos}>
            <MenuItem onClick={handleClick}>
              En
            </MenuItem>

            <MenuItem onClick={handleClick}>
             Vash
            </MenuItem >

            <MenuItem onClick={handleClick}>
            Dio
            </MenuItem>                    
        </Menu>
    )
}

export default CharMenu
