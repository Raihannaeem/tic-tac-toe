

function BoardElement({item,clicked}){
    let color

    switch(item.text){
        case 'X':
            color='#ff000d'
            break;
        case 'O':
            color=' #0505BB'
            break;
        default:
            color='#96BFC3'
            break;
    }
    return(
        <div className={item.text==''?"boardElementU":"boardElementM"} style={{backgroundColor:color}} onClick={()=>{clicked(item)}}>
            <p>{item.text}</p>
        </div>
    )
}

export default BoardElement