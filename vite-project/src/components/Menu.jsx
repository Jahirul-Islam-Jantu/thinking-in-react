import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <NavLink className="nav-link" to="/">Calculator</NavLink>
            <NavLink className="nav-link" to="/todoapp">Todo app</NavLink>
            <NavLink className="nav-link" to="/calc">Todo app</NavLink>
        </div>
    );
};

export default Menu;