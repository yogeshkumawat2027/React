function doSomething(){
    console.log("clicked");
}

export default function Button(){
    return(
        <div>
            <button onClick={doSomething}>Click me!</button>
        </div>

    );
}