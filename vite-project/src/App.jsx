import React, {useState} from 'react';
import ToDoApp from "./pages/ToDoApp.jsx";
import "./assets/css/style.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CalculatorApp from "./pages/CalculatorApp.jsx";
import ContactApp from "./pages/ContactApp.jsx";
import CustomHook from "./pages/CustomHook.jsx";
import Forms from "./pages/Forms.jsx";
import InitialInputForm from "./pages/InitialInputForm.jsx";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CalculatorApp />} />
                <Route path="/todoapp" element={<ToDoApp />} />
                <Route path="/contactList" element={<ContactApp />} />
                <Route path="/customhook" element={<CustomHook />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/inputForm" element={<InitialInputForm />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;