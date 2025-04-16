import { useState } from "react";
import NameDisplay from "./components/nameDisplay"
import Board from "./components/board";

function App() {
  const [num,setNum]=useState(1)
  const [isGameOver,setIsGameOver]=useState(false)

  function togglePlayer(){
    setNum((prevState)=>{
      return (prevState==1? 2 : 1)
    })
  }

  function gameOver(){
    setIsGameOver(true)
  }

  function restart(){
    setIsGameOver(false)
  }

  return (
    <div>
      <NameDisplay num={num}/>
      <Board togglePlayer={togglePlayer} num={num} isGameOver={isGameOver} gameOver={gameOver}/>
      {isGameOver && (<button onClick={restart}>Restart</button>)}
    </div>
  );
}

export default App;
