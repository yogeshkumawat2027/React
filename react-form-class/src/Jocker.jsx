import { useEffect, useState } from "react";

export default function Joker(){
    const URL = "https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke] = useState({})

    const getNewJoke = async() =>{
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      let joke = jsonResponse;
      setJoke(joke);
      console.log(jsonResponse);
    }
    useEffect(()=>{
        async function getFirstJoke(){
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            let joke = jsonResponse;
            setJoke(joke);
            console.log(jsonResponse);
        }
        getFirstJoke();
    },[]);
    return (
        <div>
            <h3>Jocker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    )
}