import React, {useState} from 'react';
import propTypes from 'prop-types';
import PropTypes from "prop-types";
import Button from "../ui/Button.jsx";

const HistoryItem = ({historyItem, disabled, handleRestoreBtn}) => {
    const [show, setShow] = useState(false);
    const toggleHandler = ()=>{
        setShow(!show);
    }
    return (
        <div>
            <li key={historyItem.id}>
                <div>
                    <p>Operation: {historyItem.inputs.a} {historyItem.operations} {historyItem.inputs.b},
                        Result: {historyItem.result}</p>
                    <Button onClick={toggleHandler} text={show?"Hide":"Show:"}/>
                </div>

                    {show && <> <small>Created
                        At: {historyItem.date.toLocaleDateString()}, {historyItem.date.toLocaleTimeString()}</small>

                        <Button  text="Restore" onClick={() => handleRestoreBtn(historyItem)} disabled={disabled} />
                    </>
                    }


        </li>
</div>
)
    ;
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