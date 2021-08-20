import { useEffect, useState } from "react";
import styled from "styled-components";
import DifficultyScreen from "./Components/DifficultyScreen";
import EndingScreen from "./Components/EndingScreen";
import MainScreen from "./Components/MainScreen";
import Navbar from "./Components/Navbar";
import { getTime } from "./helper-functions/getTime";

  const AppWrapper = styled.div`
  display : flex;
  flex-direction :column;
  justify-content : center;
  
  `

function App() {
  const [dbChars, setDbChars] = useState({}) ;
  const [foundChars, setFoundChars] = useState([]) ;
  const [isDoneLoading, setisDoneLoading] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [startingTime, setStartingTime] = useState(null);
  const [finishingTime, setFinishingTime] = useState(null);


useEffect(() => {
  if(isDoneLoading){
  setIsGameOver(foundChars.length === Object.entries(dbChars).length );   
}
}, [foundChars,dbChars,isDoneLoading])

useEffect(() => {
    if(isDoneLoading){
      setStartingTime( getTime() );
    }
}, [isDoneLoading])

useEffect(() => {
  if(isGameOver){
    setFinishingTime( getTime() )
  }
 
}, [isGameOver])

  return (
    <AppWrapper>
      <DifficultyScreen setDbChars={setDbChars} setisDoneLoading={setisDoneLoading}/>
      <Navbar foundChars={foundChars} isDoneLoading={isDoneLoading} isGameOver={isGameOver}/>  
      <MainScreen dbChars={dbChars}  foundChars={foundChars} setFoundChars={setFoundChars}/>
      <EndingScreen isGameOver={isGameOver} startingTime={startingTime} finishingTime={finishingTime}/>
    </AppWrapper>
    
  );
}

export default App;
