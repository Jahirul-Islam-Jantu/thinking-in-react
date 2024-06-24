import React from 'react';
import propTypes from 'prop-types';
import shortid from 'shortid';
import Button from "../ui/Button.jsx";
import PropTypes from "prop-types";

const OperationSection = ({handleOperations, handleClearOps}) => {
    const operations = [
        {
            id: shortid.generate(),
            text: '+',
            onClick: () => handleOperations('+')
        },
        {
            id: shortid.generate(),
            text: '-',
            onClick: () => handleOperations('-')
        },
        {
            id: shortid.generate(),
            text: '*',
            onClick: () => handleOperations('*')
        },
        {
            id: shortid.generate(),
            text: '/',
            onClick: () => handleOperations('/')
        },
        {
            id: shortid.generate(),
            text: '%',
            onClick: () => handleOperations('%')
        },
        {
            id: shortid.generate(),
            text: '**',
            onClick: () => handleOperations('**')
        },
        {
            id: shortid.generate(),
            text: '||',
            onClick: () => handleOperations('||')
        },
        
        {
            id: shortid.generate(),
            text: 'Clear',
            onClick: handleClearOps
        },
    ]
    return (
        <div>
            <h3>Operations :</h3>
            <div className="btn-group">
                {operations.map(operation => <Button key={operation.id} text={operation.text} onClick={operation.onClick}  />)}
            </div>
        </div>
    );
};

OperationSection.propTypes = {

    handleOperations: PropTypes.func.isRequired,
    handleClearOps: PropTypes.func.isRequired,
}

export default OperationSection;