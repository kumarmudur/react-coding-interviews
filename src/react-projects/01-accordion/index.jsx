// single selection
// multiple selection

import { useState } from "react";

import './style.css';

import data from './data';

const Accoridian = () => {
    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (currentId) => {
        console.log('currentId: ' + currentId);
        setSelected(currentId === selected ? null : currentId);
    }

    return (
        <div className="wrapper">
            <div className="accoridian">
                {
                    data && data.length > 0 ? data.map(dataItem => (
                        <div className="item" key={dataItem.id}>
                            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ?
                                <div className="content">{ dataItem.answer}</div> : null
                            }
                        </div>
                    ))
                   : <div>No data found!</div>
                }
            </div>
        </div>
    )
}

export default Accoridian;

