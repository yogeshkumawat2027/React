import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue : 0, yellow : 0, green : 0,red : 0});
    let [arr,setArr] = useState(["no moves"]);

    function update(color){
        moves[color]+=1;
       
        setMoves((prevMoves)=>{
            return {...prevMoves};

        });

          

        setArr([...arr,`${color} move `]);
    }
    
    return(
        <div>
            <p>Ludo Board</p>
            <div className="board">
               <p>{arr}</p>
               
                <p>Blue moves = {moves.blue}</p>
                <button onClick={()=>{update("blue")}}  style={{backgroundColor : "blue"}}>+1</button>
                <p>Yellow moves = {moves.yellow} </p>
                <button onClick={()=>{update("yellow")}} style={{backgroundColor : "yellow",color : "black"}}>+1</button>
                <p>Green moves = {moves.green} </p>
                <button onClick={()=>{update("green")}} style={{backgroundColor : "green"}}>+1</button>
                <p>Red moves = {moves.red} </p>
                <button onClick={()=>{update("red")}} style={{backgroundColor : "red"}}>+1</button>
            </div>
        </div>
    )
}