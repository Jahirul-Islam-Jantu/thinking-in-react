import React from 'react';
import propTypes from 'prop-types';
import HistoryItem from "./HistoryItem.jsx";
import PropTypes from "prop-types";

const HistorySection = ({historyList, restoredHistoryList, handleRestoreBtn}) => {
    return (
        <div>
            <h2><span>History</span></h2>
            {historyList.length === 0 ? <p>
                <small>There is no history</small>
            </p> : <ul style={{marginTop: "1rem"}}>
                {historyList.map((historyItem) =>
                    <HistoryItem key={historyItem.id} disabled={restoredHistoryList===historyItem.id} historyItem={historyItem} handleRestoreBtn={handleRestoreBtn}/>
                )}
            </ul>}
        </div>
    );
};

HistoryItem.propTypes = {
    historyList: PropTypes.arrayOf(PropTypes.shape({
        id: propTypes.number.isRequired,
        inputs: propTypes.shape({
            a: propTypes.number.isRequired,
            b: propTypes.number.isRequired,
        }).isRequired,
        operations: propTypes.string.isRequired ,
        result: propTypes.number.isRequired ,
        date: propTypes.object.isRequired,
    }),
    ),
    restoredHistoryList: propTypes.number.isRequired,
    handleRestoreBtn: PropTypes.func.isRequired,
}

export default HistorySection;