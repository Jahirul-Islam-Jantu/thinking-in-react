import React, {useState} from 'react';


const InitialState = {
    a: 0,
    b: 0,
}

const CalculatorApp = () => {

  const [inputState, setInputState] = useState({...InitialState});
  const handleInputForms = (e)=>{
      setInputState({...inputState,});
      [e.target.name]: e.target.value;

  }


    return (
        <div style={{ padding: "1rem", width: "50%", margin: "0 auto" }}>
            <h1>Result : 0</h1>
            <div style={{marginTop: "1rem"}}>
                <h3 style={{marginBottom: "1rem"}}>Inputs :</h3>
                <input onChange={handleInputForms}  type="number" value={inputState.a}/>
                <input onChange={handleInputForms} type="number" value={inputState.b}/>
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