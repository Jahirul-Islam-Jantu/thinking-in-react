import React from 'react';
import ToDoApp from "./pages/ToDoApp.jsx";
import "./assets/css/style.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CalculatorApp from "./pages/CalculatorApp.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CalculatorApp />} />
                <Route path="/todoapp" element={<ToDoApp />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;