import React from 'react';
import Menu from "../components/Menu.jsx";
import CountCustomHook from "../components/customHook/CountCustomHook.jsx";

const CustomHook = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems:'center', flexDirection: 'column' , flexGrow: 3 }}>
            <Menu/>
            <h1>This is Custom Hook Page</h1>
            <CountCustomHook/>
        </div>
    );
};

export default CustomHook;