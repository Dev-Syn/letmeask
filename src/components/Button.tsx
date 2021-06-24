import { useState } from "react";

export function Button(){

    //let counter = 0;

    const [counter, setCouter] = useState(0);

    function increment(){
        //counter +=1;
        setCouter(counter +1);
        console.log(counter);
    }

    return (
        <button onClick={increment}>{counter}</button>
    )
}
// named export
