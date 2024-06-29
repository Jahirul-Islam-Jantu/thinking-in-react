import React from 'react';
import CountController from "./CountController.jsx";
import useCounter from "./useCounter.js";

const CountCustomHook = () => {
    const {counter: counter1, handleInc: handleInc1, handleDec: handleDec1} = useCounter({initial: 0, upperBoun: 15 })
    const {counter: counter2, handleInc: handleInc2, handleDec: handleDec2} =  useCounter({initial: -2, upperBound: 10 })
    const counter3 =  useCounter({initial: -5, upperBound: 30 })
    return (
        <div>
            <>
                <CountController
                counter = {counter1}
                handleInc = {handleInc1}
                handleDec = {handleDec1}
            />
             </>
            <>
                <CountController
                counter = {counter2}
                handleInc = {handleInc2}
                handleDec = {handleDec2}
            />
            </>
            <>
                <CountController
                counter = {counter3.counter}
                handleInc = {counter3.handleInc}
                handleDec = {counter3.handleDec}/>
            </>
        </div>
    );
};

export default CountCustomHook;