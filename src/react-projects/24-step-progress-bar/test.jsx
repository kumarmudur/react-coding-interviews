import { useState } from "react";

import StepProgressBar from '.';
import './progress.css';

const StepProgressBarTest = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['step 1', 'step 2', 'step 3', 'step 4', 'step 5'];


    return (
        <div className="step-progress-bar-container">
            <h1>Step Progress Bar</h1>
            <StepProgressBar 
                steps={steps} 
                activeStep={activeStep} 
                setActiveStep={setActiveStep}
            />
        </div>
    );
};

export default StepProgressBarTest;