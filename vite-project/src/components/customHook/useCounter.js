import {useState} from "react";

const useCounter = ()=>{
    const [counter, setCounter] = useState(0);

    const handleInc= ()=>{
        if(counter < 10){
            setCounter(counter + 1);
        }
    }
    const handleDec= ()=>{
        if(counter > 0){
            setCounter(counter - 1);
        }
    }
    return {
        counter, handleInc, handleDec
    }


}

export default useCounter