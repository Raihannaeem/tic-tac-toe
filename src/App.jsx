import { useState } from "react";
import NameDisplay from "./components/nameDisplay"
import Board from "./components/board";

function App() {
  const [num,setNum]=useState(1)
  const [isGameOver,setIsGameOver]=useState(false)
  const [restart,setRestart]=useState(false)

  function togglePlayer(){
    setNum((prevState)=>{
      return (prevState==1? 2 : 1)
    })
  }

  function gameOver(){
    setIsGameOver(true)
  }

  function toggleRestart(){
    if(restart){
      setIsGameOver(false)  
    }
    setRestart((prevState)=>{
      console.log(!prevState)
      return !prevState
    })

  }

  return (
    <div>
      <NameDisplay num={num} isGameOver={isGameOver}/>
      <Board togglePlayer={togglePlayer} num={num} isGameOver={isGameOver} gameOver={gameOver} restart={restart} toggleRestart={toggleRestart}/>
      {/* {isGameOver && (<button onClick={toggleRestart}>Restart</button>)} */}
    </div>
  );
}

export default App;
