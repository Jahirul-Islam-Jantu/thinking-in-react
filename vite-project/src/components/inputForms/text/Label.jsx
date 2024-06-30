import styled from "styled-components";

const fontSizes = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem',
}

const lineHeight = {
    sm: 1,
    md: 1.5,
    lg: 2,
}

const Label = styled.label`
    font-family: Berlin Sans FB Demi,ui-sans-serif;
    font-size: ${props=>fontSizes[props.size] ?? '1rem'};
    color: #212121;
    line-height: ${props=>lineHeight[props.height] ?? 1};
    user-select: none;
    
`

export default Label;