import React from 'react';
import PropTypes from 'prop-types';

const NumberField = ({value, onChange, name }) => {
    return (
        <div >
            <input className="field" type="number" value={value} onChange={onChange} name={name} />
        </div>
    );
};
NumberField.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default NumberField;