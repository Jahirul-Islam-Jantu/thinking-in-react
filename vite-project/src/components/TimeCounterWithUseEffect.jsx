import React, {useEffect, useState} from 'react';




/**
 * Create an interval for timeCount
 * set count to 0, set lock to false and timeCount to 5
 *
 *
*/


let timeInterval = null



const TimeCounterWithUseEffect = () => {
    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    const [timeCount, setTimeCount] = useState(5)

useEffect(() => {
    if (count === 5){
        setLock(true)
    }
    return () => {

    }
}, [count])



    useEffect(() => {
        if (lock && timeInterval === null)
        timeInterval = setInterval(() => {
        setTimeCount ((prev) => prev - 1)
        }, 1000)
    },[lock])

    useEffect(() => {
        if (timeCount === 0){
            clearInterval(timeInterval)
            setCount(0)
            setLock(false)
            setTimeCount(5)

        }
    }, [timeCount])

    const handleOnClick = ()=>{
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button id="btn" disabled={lock} onClick={handleOnClick}>Add {lock && `locked - ${timeCount}`}</button>
        </div>
    );
};

export default TimeCounterWithUseEffect;