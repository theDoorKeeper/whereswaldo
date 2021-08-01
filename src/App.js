import { createGlobalStyle } from "styled-components";
import MainScreen from "./Components/MainScreen";
import Navbar from "./Components/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding : 0;
  } `

function App() {
  return (
    
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <MainScreen/>
    </div>
    
  );
}

export default App;
