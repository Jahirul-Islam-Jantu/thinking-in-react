import React from 'react';
import MasterLayOut from "../components/MasterLayOut.jsx";

const CalculatorApp = () => {
    return (
        <div style={{ padding: "1rem", textAlign: "center" }}>
            <h1>Result : 0</h1>
            <div style={{marginTop: "1rem"}}>
                <h3 style={{marginBottom: "1rem"}}>Inputs :</h3>
                <input  type="number"/>
                <input type="number" />
            </div>
            <div style={{marginTop: "1rem"}}>
                <h3>Operations :</h3>
                <button className="btn">+</button>
                <button className="btn">-</button>
                <button className="btn">*</button>
                <button className="btn">/</button>
                <button className="btn">Clear</button>
            </div>
        </div>
    );
};

export default CalculatorApp;