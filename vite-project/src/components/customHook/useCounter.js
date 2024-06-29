import {useState} from "react";

const useCounter = ({initial = 0, upperBound= 20 , lowerBound = 0})=>{
    const [counter, setCounter] = useState(initial);

    const handleInc= ()=>{
        if(counter < upperBound){
            setCounter(counter + 1);
        }
    }
    const handleDec= ()=>{
        if(counter > lowerBound){
            setCounter(counter - 1);
        }
    }
    return {
        counter,upperBound,lowerBound, handleInc, handleDec
    }


}

export default useCounter