import React, {useState} from 'react';
import ToDoApp from "./pages/ToDoApp.jsx";
import "./assets/css/style.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CalculatorApp from "./pages/CalculatorApp.jsx";
import ContactApp from "./pages/ContactApp.jsx";
import CustomHook from "./pages/CustomHook.jsx";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CalculatorApp />} />
                <Route path="/todoapp" element={<ToDoApp />} />
                <Route path="/contactList" element={<ContactApp />} />
                <Route path="/customhook" element={<CustomHook />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;