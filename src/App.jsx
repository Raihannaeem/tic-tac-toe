import { useState } from "react";
import NameDisplay from "./components/nameDisplay"
import Board from "./components/board";

function App() {
  const [num,setNum]=useState(1)
  const [isGameOver,setIsGameOver]=useState(false)
  const [draw,setDraw]=useState(false)
  const [isRestart,setIsRestart]=useState(false)

  function togglePlayer(){
    setNum((prevState)=>{
      return (prevState==1? 2 : 1)
    })
  }

  return (
    <div className="main">
      <div>
        <NameDisplay num={num} isGameOver={isGameOver} draw={draw}/>
        <Board isRestart={isRestart} setIsRestart={setIsRestart} togglePlayer={togglePlayer} setDraw={setDraw} num={num} isGameOver={isGameOver} setIsGameOver={setIsGameOver}/>
        <a className="restart" href="/tic-tac-toe" style={{opacity: isGameOver? '100%':'0%'}}>Restart</a>
      </div>
    </div>
  );
}

export default App;
