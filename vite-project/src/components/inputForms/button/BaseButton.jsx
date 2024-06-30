import styled from "styled-components";

const BaseButton = styled.button`
    border: 1px solid lightskyblue;
    background-color: white;
    color: lightskyblue;
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;
    cursor: pointer;
    letter-spacing: 1px;
    transition: color 200ms ease-in-out;
    text-transform: uppercase;
    
    
    
    &:hover {
        background-color: lightskyblue;
        color: white;
        
        
    }
    &:active{
        background-color: lightgray;
        color: darkgray;
        
    }

`

export default BaseButton;