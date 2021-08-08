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
    
    z-index: 1; 
    cursor: pointer; 
  ` 

function Popup(props) {
    const { hasFoundChar } = props;
    return (
        <Pop>
            {hasFoundChar ? 'you have found a char !' : 'Wrong , try again !'}
        </Pop>
    )
}

export default Popup
