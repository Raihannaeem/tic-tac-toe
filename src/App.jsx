import { useState } from "react";
import NameDisplay from "./components/nameDisplay"
import Board from "./components/board";

function App() {
  const [num,setNum]=useState(1)
  const [isGameOver,setIsGameOver]=useState(false)
  const [draw,setDraw]=useState(false)

  function togglePlayer(){
    setNum((prevState)=>{
      return (prevState==1? 2 : 1)
    })
  }

  return (
    <div className="main">
      <NameDisplay num={num} isGameOver={isGameOver} draw={draw}/>
      <Board togglePlayer={togglePlayer} setDraw={setDraw} num={num} isGameOver={isGameOver} setIsGameOver={setIsGameOver}/>
      {isGameOver&&(<a href="/" className="restart">Restart</a>)}
    </div>
  );
}

export default App;
