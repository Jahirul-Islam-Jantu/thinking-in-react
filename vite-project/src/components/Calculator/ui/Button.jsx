import React from 'react';
import PropTypes from "prop-types";

const Button = ({text, onClick, disabled, customStyle}) => {

    return (
        <div>
            <button  className='btn' onClick={onClick} disabled={disabled}>{text}</button>
        </div>
    );
};
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    customStyle: PropTypes.object,
}


export default Button;