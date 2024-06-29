import React from 'react';

const CountController = ({handleInc, counter, handleDec}) => {

    return (
            <div style={{display: 'flex', justifyContent:'center', flexDirection: 'row', alignItems: 'center'}}>
                <button className="btn" onClick={handleInc}>+</button>
                <p style={{padding: '1rem'}}>{counter}</p>
                <button className="btn" onClick={handleDec}>-</button>
            </div>
    );
};

export default CountController;