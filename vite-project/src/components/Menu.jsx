import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <NavLink className="nav-link" to="/">Calculator</NavLink>
            <NavLink className="nav-link" to="/todoapp">Todo app</NavLink>
            <NavLink className="nav-link" to="/contactList">Contact</NavLink>
            <NavLink className="nav-link" to="/customhook">Custom Hook</NavLink>
            <NavLink className="nav-link" to="/forms">Forms</NavLink>
            <NavLink className="nav-link" to="/inputForm">Input Form</NavLink>

        </div>
    );
};

export default Menu;