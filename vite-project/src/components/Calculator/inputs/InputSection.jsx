import React from 'react';
import propTypes from 'prop-types';
import NumberField from "../ui/NumberField.jsx";
import PropTypes from "prop-types";

const InputSection = ({inputs, handleInputChange}) => {
    return (
        <div style={{marginTop: "1rem"}}>
            <h3 style={{marginBottom: "1rem"}}>Inputs :</h3>
            <NumberField onChange={(e) => handleInputChange({a: parseInt(e.target.value)})} type="number"
                         value={inputs.a} name="a"/>
            <NumberField onChange={(e) => handleInputChange({b: parseInt(e.target.value)})} type="number"
                         value={inputs.b} name="b"/>
        </div>
    );
};
InputSection.propTypes = {
    inputs: propTypes.shape({a: propTypes.number.isRequired, b: propTypes.number.isRequired}).isRequired,
    handleInputChange: PropTypes.func.isRequired,
}

export default InputSection;