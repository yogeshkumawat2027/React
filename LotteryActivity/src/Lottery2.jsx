import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let newTicket = () =>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game !</h1>
            <Ticket ticket={ticket} />
            <button onClick={newTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation You win !"}</h3>
        </div>
    );
}