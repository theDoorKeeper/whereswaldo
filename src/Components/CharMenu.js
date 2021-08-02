import React from 'react'
import styled from 'styled-components'

const Menu = styled.ul`
    position : absolute;
    display : ${ props => props.displayMenu ? 'flex' : 'none'};
    left : ${props => props.xpos}px;
    top : ${props => props.ypos}px;
    list-style : none ; 
    flex-direction : column;
    justify-content: space-between;
    height :200px;
    cursor : pointer;
    padding : 0;
      border : 1px tomato solid;

`

const MenuItem = styled.li`
    width : 142px;
    border-top : 1px tomato solid;
    background-color : #292b2c ;
    height : 66px;
    display : flex ; 
    align-items : center ;
    justify-content : center ;

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
