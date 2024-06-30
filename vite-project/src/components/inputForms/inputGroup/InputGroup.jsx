import React from 'react';
import Label from "../text/Label.jsx";
import Container from "../ui/Container.jsx";
import TextInput from "../input/TextInput.jsx";
import ErrorMessage from "../errorHandle/ErrorMessage.jsx";

const InputGroup = ({label, name, value, placeholder, onChange, error, onFocus}) => {
    return (
        <Container>
            <Label htmlFor={name}> {label} </Label>
            <TextInput placeholder={placeholder ?? ""} id={name} name={name} value={value} onChange={onChange} error={error} onFocus={onFocus} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};

export default InputGroup;