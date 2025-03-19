import { useState } from "react";
import { genTicket,sum } from "./helper";

export default function Lottery(){
    let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) ===15;
    let newTicket = () =>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            <h1>Lottery Game !</h1>
            <div>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={newTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation You win !"}</h3>
        </div>
    );
}