// Handle user input
// Handle Operations
// Handle a list of history
// Render history
// Restore history


import React, {useState} from 'react';


const InitialState = {
    a: 0,
    b: 0,
}

const CalculatorApp = () => {

  const [inputState, setInputState] = useState({...InitialState});
  // const handleInputForms = (e)=> {
  //     setInputState({
  //      ...inputState,
  //     [e.target.name]: parseInt(e.target.value),
  //     });
  //
  // }

  // const handleInputA = (e)=>{
  //     setInputState({
  //         ...inputState,
  //         a: parseInt(e.target.value),
  //
  //     })
  // }
  //   const handleInputB = (e)=>{
  //       setInputState({
  //           ...inputState,
  //           b: parseInt(e.target.value),
  //
  //       })
  //   }
    const handleInputChange = (inp)=>{
        setInputState({
            ...inputState,
            ...inp
        });
    }


    return (
        <div style={{ padding: "1rem", width: "50%", margin: "0 auto" }}>
            <h1>Result : 0 </h1>
            <div style={{marginTop: "1rem"}}>
                <h3 style={{marginBottom: "1rem"}}>Inputs :</h3>
                <input onChange={(e)=>handleInputChange({a: parseInt(e.target.value)})}  type="number" value={inputState.a} name="a"/>
                <input onChange={(e)=>handleInputChange({b: parseInt(e.target.value)})} type="number" value={inputState.b} name="b"/>
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