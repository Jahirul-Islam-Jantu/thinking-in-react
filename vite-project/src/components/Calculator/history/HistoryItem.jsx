import React from 'react';
import propTypes from 'prop-types';
import PropTypes from "prop-types";
import Button from "../ui/Button.jsx";

const HistoryItem = ({historyItem, disabled, handleRestoreBtn}) => {
    return (
        <div>
            <li key={historyItem.id}>
                <p>Operation: {historyItem.inputs.a} {historyItem.operations} {historyItem.inputs.b},
                    Result: {historyItem.result}</p>
                <small>Created
                    At: {historyItem.date.toLocaleDateString()}, {historyItem.date.toLocaleTimeString()}</small>

                <Button disabled={disabled} text="Restore" onClick={() => handleRestoreBtn(historyItem)}/>

            </li>
        </div>
    );
};

HistoryItem.propTypes = {
    historyItem: PropTypes.shape({
        id: propTypes.number.isRequired,
        inputs: propTypes.shape({
            a: propTypes.number.isRequired,
            b: propTypes.number.isRequired,
        }).isRequired,
        operations: propTypes.string.isRequired ,
        result: propTypes.number.isRequired ,
        date: propTypes.object.isRequired,
    }),
    disabled: PropTypes.bool.isRequired,
    handleRestoreBtn: PropTypes.func.isRequired,
}
HistoryItem.defaultProps = {
    disabled: false,
}

export default HistoryItem;