import { useState } from "react";
import './custom-progress.css';

const Progressbar = () => {
    const [progressPercent, setProgressPercent] = useState();
    const [errorMsg, setErrorMsg] = useState('');

    const handleProgressPercent = (event) => {
        const { value } = event.target;
        if (value > 100) {
            setErrorMsg('Please enter value less than 100');
        } else {
            setErrorMsg('');
            setProgressPercent(value);
        }
    }

    return (
        <div className="progress-bar-container">
            <h1>Custom Progress Bar</h1>
            <div className="progress-bar">
                <div className="wrapper">
                    { 
                        progressPercent >= 0 && progressPercent <= 100 ?
                        <div 
                            style={{ width: `${progressPercent}%`}} 
                            className="inner-wrapper"
                        >
                            { progressPercent }
                        </div> : <p>{errorMsg}</p>
                    }
                </div>
            </div>
            <div className="input-container">
                <label>Input Percentage: </label>
                <input 
                    type="number" 
                    value={progressPercent} 
                    onChange={handleProgressPercent}
                />
            </div>
        </div>
    )
};

export default Progressbar;