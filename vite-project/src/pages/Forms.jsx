import React from 'react';
import Menu from "../components/Menu.jsx";
import TextInput from "../components/inputForms/input/TextInput.jsx";
import BaseButton from "../components/inputForms/button/BaseButton.jsx";

const Forms = () => {
    return (
        <div>
            <Menu/>
                <TextInput/>
                <BaseButton>This is Button</BaseButton>
        </div>
    );
};

export default Forms;