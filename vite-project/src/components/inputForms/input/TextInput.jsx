import styled from "styled-components";

const TextInput = styled.input`
    width: 100%;
    border: 2px solid #ccc;
    outline: none;
    background: #dddddd;
    color: #999999;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px 20px;
    font-size: 16px;

    &:focus {
        border: 2px solid #143679;
        background: #8c8b8b;
    }
`
export default TextInput;