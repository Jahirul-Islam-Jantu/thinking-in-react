/**
 * Todo: Handle user input. done
 * Todo: Handle Operations. done
 * Todo: Handle a list of history.
 * Todo: Render history.
 * Todo: Restore history.
 */

import React, {  useState} from 'react';
import NumberField from "../components/Calculator/ui/NumberField.jsx";
import Button from "../components/Calculator/ui/Button.jsx";
import InputSection from "../components/Calculator/inputs/InputSection.jsx";
import OperationSection from "../components/Calculator/operations/OperationSection.jsx";
import HistorySection from "../components/Calculator/history/HistorySection.jsx";
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
  const [restoredHistoryList, setRestoredHistoryList] = useState(null);



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
    const handleRestoreBtn = (historyItem)=>{
        setInputState({...historyItem.inputs });
        setResult(historyItem.result);
        setRestoredHistoryList(historyItem);
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
            inputs: {...inputState},
            operations,
            result,
            date: new Date()

        }
        setHistoryList([historyItem, ...historyList ])


}


    return (
        <div style={{ padding: "1rem", width: "50%", margin: "0 auto" }}>
            <h1>Result : {result} </h1>
                <InputSection inputs={inputState} handleInputChange={handleInputChange}/>
                <OperationSection handleOperations={handleOperations} handleClearOps={handleClearOps}/>
                <HistorySection historyList={historyList} restoredHistoryList={restoredHistoryList} handleRestoreBtn={handleRestoreBtn}/>

        </div>
    );
};

export default CalculatorApp;