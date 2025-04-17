

function NameDisplay({num,isGameOver}){
    return(
        <div className="nameDisplay" style={{backgroundColor: isGameOver?(num==1? 'rgb(153, 1, 9)': 'rgb(3, 3, 120)') :(num==1? '#ff000d': '#0505BB')}}>
            <h1>{num==1?'X':'O'}{isGameOver?" Wins":"'s Turn"}</h1>
        </div>
    )
}

export default NameDisplay;