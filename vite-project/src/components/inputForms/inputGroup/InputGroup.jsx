import React from 'react';
import Label from "../text/Label.jsx";
import Container from "../ui/Container.jsx";
import TextInput from "../input/TextInput.jsx";

const InputGroup = ({label, name, value, placeholder, onChange}) => {
    return (
        <Container>
            <Label htmlFor={name}> {label} </Label>
            <TextInput placeholder={placeholder ?? ""} id={name} name={name} value={value} onChange={onChange} />
        </Container>
    );
};

export default InputGroup;