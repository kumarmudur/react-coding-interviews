// single selection
// multiple selection

import { useState } from "react";

import './style.css';

import data from './data';

const Accoridian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (currentId) => {
        console.log('currentId: ' + currentId);
        setSelected(currentId === selected ? null : currentId);
    }

    const handleEnableMultiSelection = () => {
        setEnableMultiSelection(!enableMultiSelection);
    }

    const handleMultiSelection = (currentId) => {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

        if (findIndexOfCurrentId === -1) copyMultiple.push(currentId);
        else copyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(copyMultiple);
        console.log(multiple);
    }

    return (
        <div className="wrapper">
            <button onClick={handleEnableMultiSelection}>Enable Multi Selection</button>
            <div className="accoridian">
                {
                    data && data.length > 0 ? data.map(dataItem => (
                        <div className="item" key={dataItem.id}>
                            <div onClick={enableMultiSelection 
                            ? () => handleMultiSelection(dataItem.id) 
                            : () => handleSingleSelection(dataItem.id)} 
                            className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ? 
                                multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="content">{ dataItem.answer}</div>
                                ) :  selected === dataItem.id && (
                                    <div className="content">{ dataItem.answer}</div>
                                )
                            }
                            {/* {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                <div className="content">{ dataItem.answer}</div> : null
                            } */}
                        </div>
                    ))
                   : <div>No data found!</div>
                }
            </div>
        </div>
    )
}

export default Accoridian;

