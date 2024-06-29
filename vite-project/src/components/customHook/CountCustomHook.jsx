import React from 'react';
import CountController from "./CountController.jsx";
import useCounter from "./useCounter.js";

const CountCustomHook = () => {
    const {counter: counter1, handleInc: handleInc1, handleDec: handleDec1} = useCounter()
    const {counter: counter2, handleInc: handleInc2, handleDec: handleDec2} =  useCounter()
    const counter3 =  useCounter()
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