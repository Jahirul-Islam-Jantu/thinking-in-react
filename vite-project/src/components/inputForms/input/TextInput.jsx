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
    border-radius: 10px;

    &:focus {
        border: 2px solid #143679;
        background: rgba(0, 0, 0, 0.26);
        color: #fff;
    }
`
export default TextInput;