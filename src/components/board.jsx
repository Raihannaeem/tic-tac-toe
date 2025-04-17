import { useState } from "react"
import BoardElement from "./boardElement"

function Board({togglePlayer,num,setIsGameOver,isGameOver,setDraw}){
    const [items,setItems]=useState([{id:'00',text:''},{id:'01',text:''},{id:'02',text:''},{id:'10',text:''},{id:'11',text:''},{id:'12',text:''},{id:'20',text:''},{id:'21',text:''},{id:'22',text:''}])

    function check(arr){
        console.log(`${arr[0].text}  ${arr[1].text}  ${arr[2].text}`)
        console.log(`${arr[3].text}  ${arr[4].text}  ${arr[5].text}`)
        console.log(`${arr[6].text}  ${arr[7].text}  ${arr[8].text}`)
        if(arr[0].text==arr[1].text && arr[1].text==arr[2].text && arr[0].text!='')
            return 1;
        if(arr[3].text==arr[4].text && arr[4].text==arr[5].text && arr[3].text!='')
            return 1;
        if(arr[6].text==arr[7].text && arr[7].text==arr[8].text && arr[6].text!='')
            return 1;
        if(arr[0].text==arr[3].text && arr[3].text==arr[6].text && arr[0].text!='')
            return 1;
        if(arr[1].text==arr[4].text && arr[4].text==arr[7].text && arr[1].text!='')
            return 1;
        if(arr[2].text==arr[5].text && arr[5].text==arr[8].text && arr[2].text!='')
            return 1;
        if(arr[0].text==arr[4].text && arr[4].text==arr[8].text && arr[0].text!='')
            return 1;
        if(arr[2].text==arr[4].text && arr[4].text==arr[6].text && arr[2].text!='')
            return 1;
        for(let i in arr)
            if(arr[i].text=='')
                return 0;
        setDraw(true)
        return 1;      
    }

    function clicked(item){
        if(item.text=='' & !isGameOver){
            let mark = num==1?'X':'O';
            let arr = items;
            for(let i in arr){
                if(item.id==arr[i].id){
                    arr[i].text=mark
                }
            }
            setItems(arr)
            const ended=check(items)
            console.log(ended)
            if(!ended)
                togglePlayer()
            else
                setIsGameOver(true)
        }
    }

    return(
        <div className="board">
            <div className="row">
                <BoardElement item={items[0]} clicked={clicked} isGameOver={isGameOver}/>
                <BoardElement item={items[1]} clicked={clicked} isGameOver={isGameOver}/>
                <BoardElement item={items[2]} clicked={clicked} isGameOver={isGameOver}/>
            </div>
            <div className="row">
                <BoardElement item={items[3]} clicked={clicked} isGameOver={isGameOver}/>
                <BoardElement item={items[4]} clicked={clicked} isGameOver={isGameOver}/>
                <BoardElement item={items[5]} clicked={clicked} isGameOver={isGameOver}/>
            </div>
            <div className="row">
                <BoardElement item={items[6]} clicked={clicked} isGameOver={isGameOver}/>
                <BoardElement item={items[7]} clicked={clicked} isGameOver={isGameOver}/>
                <BoardElement item={items[8]} clicked={clicked} isGameOver={isGameOver}/>
            </div>
        </div>
    )
}

export default Board