import React from 'react'
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
    const {displayMenu, xpos, ypos, handleClick} = props;



    return (
        <Menu displayMenu={displayMenu} xpos={xpos} ypos={ypos}>
            <MenuItem onClick={handleClick}>
              Kai
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
