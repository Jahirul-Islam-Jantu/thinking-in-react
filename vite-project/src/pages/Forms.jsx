import React from 'react';
import Menu from "../components/Menu.jsx";
import InputGroup from "../components/inputForms/inputGroup/InputGroup.jsx";
import BaseButton from "../components/inputForms/button/BaseButton.jsx";

const Forms = () => {
    return (
        <div className="top">
            <Menu/>
                <InputGroup name="title" placeholder={"What is Your Name?"} label={"Name"} />
                <BaseButton className="gap">Do you agree?</BaseButton>
        </div>
    );
};

export default Forms;