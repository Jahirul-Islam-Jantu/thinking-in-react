/**
 * Todo: Handle user input. done
 * Todo: Handle Operations. done
 * Todo: Handle a list of history.
 * Todo: Render history.
 * Todo: Restore history.
 */

import React, {useState} from 'react';
function* generateId(){
    let id = 0
    while (true){
        yield id++
    }
}
const getId = generateId()




const InitialState = {
    a: 0,
    b: 0,
}

const CalculatorApp = () => {

  const [inputState, setInputState] = useState({...InitialState});
  const [result, setResult] = useState(0);
  const [historyList, setHistoryList] = useState([]);
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

    const handleClearOps = ()=>{
        setInputState({...InitialState});
        setResult(0);
    }

    const handleOperations = (operations)=>{
        if(!inputState.a || !inputState.b){
            alert("No Input")
            return
        }
        const operationStr = `return ${inputState.a} ${operations} ${inputState.b}`
        const f = new Function("operations", `${operationStr}`);
        const result = f(operations)
        setResult(result);

        const historyItem = {
            id: getId.next().value,
            inputs: inputState,
            operations,
            result,
            date: new Date()

        }
        setHistoryList([historyItem, ...historyList ])



    }


    return (
        <div style={{ padding: "1rem", width: "50%", margin: "0 auto" }}>
            <h1>Result : {result} </h1>
            <div style={{marginTop: "1rem"}}>
                <h3 style={{marginBottom: "1rem"}}>Inputs :</h3>
                <input onChange={(e)=>handleInputChange({a: parseInt(e.target.value)})}  type="number" value={inputState.a} name="a"/>
                <input onChange={(e)=>handleInputChange({b: parseInt(e.target.value)})} type="number" value={inputState.b} name="b"/>
            </div>
            <div style={{marginTop: "1rem"}}>
                <h3>Operations :</h3>
                <button onClick={()=>handleOperations('+')} className="btn">+</button>
                <button onClick={()=>handleOperations('-')} className="btn">-</button>
                <button onClick={()=>handleOperations('*')} className="btn">*</button>
                <button onClick={()=>handleOperations('/')} className="btn">/</button>
                <button onClick={()=>handleOperations('%')} className="btn">%</button>
                <button onClick={handleClearOps} className="btn">Clear</button>
            </div>
            <div>
                <h2><span>History</span></h2>
                {historyList.length === 0 ? <p>
                    <small>There is no history</small>
                </p> : <ul style={{marginTop: "1rem"}}>
                    {historyList.map((historyItem) => (<li key={historyItem.id}>
                        <p>Operation: {historyItem.inputs.a} {historyItem.operations} {historyItem.inputs.b}, Result: {historyItem.result}</p>
                        <small>Created At: {historyItem.date.toLocaleDateString()}, {historyItem.date.toLocaleTimeString()}</small>
                        <button className="btn">Restore</button>
                    </li>))}

                </ul>}


            </div>
        </div>
    );
};

export default CalculatorApp;