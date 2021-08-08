import React from 'react';
import styled from 'styled-components';

const Pop = styled.div.attrs(props => ({
    style: {
     display : props.hasClicked ? 'flex' : 'none', 
     backgroundColor : props.hasFoundChar ? 'green' : 'red' 
         },
     }))`
     position: fixed;  
     top : 0;
     left: 0;
     right: 0;
     margin: 5% auto; 
    justify-content :center;
    width: 500px; 
    height: 2rem ; 
    border-radius : 35px;
    z-index: 1; 
    cursor: pointer; 
  ` 

function Popup(props) {
    const { hasFoundChar,hasClicked } = props;
    return (
        <Pop hasClicked={hasClicked} hasFoundChar={hasFoundChar}>
            {hasFoundChar ? 'you have found a char !' : 'Wrong , try again !'}
        </Pop>
    )
}

export default Popup
