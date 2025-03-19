
import { useState } from "react";

export default function  Counter(){

  let [count,setCount] = useState(0);
    function increatment(){
        
        setCount((currValue)=>{
            return currValue+1;
        });
        setCount((currValue)=>{
            return currValue+1;
        });
        
    }
    return(
        <button onClick={increatment}> Count {count}</button>
    )
}