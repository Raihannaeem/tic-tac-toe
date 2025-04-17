

function NameDisplay({num,isGameOver,draw}){
    return(
        <div className="nameDisplay" style={{backgroundColor: (isGameOver&&draw)? "rgb(34, 34, 34)" : (isGameOver?(num==1? 'rgb(153, 1, 9)': 'rgb(3, 3, 120)') :(num==1? '#ff000d': '#000080'))}}>
            {draw? (<h1>Draw</h1>):(<h1>{num==1?'X':'O'}{isGameOver?" Wins":"'s Turn"}</h1>)}
        </div>
    )
}

export default NameDisplay;