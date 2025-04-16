

function NameDisplay({num}){
    return(
        <div className="nameDisplay" style={{backgroundColor: num==1? '#ff000d': '#0505BB'}}>
            <h1>Player {num}</h1>
        </div>
    )
}

export default NameDisplay;