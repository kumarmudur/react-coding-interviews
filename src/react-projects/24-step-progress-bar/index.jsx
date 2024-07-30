import PropTypes from 'prop-types';

const StepProgressBar = ({ steps, activeStep, setActiveStep}) => {

    const handlePreviousStep = () => {
        setActiveStep(prevStep => Math.max(prevStep - 1, 0));
    }

    const handleNextStep = () => {
        setActiveStep(prevStep => Math.min(prevStep + 1, steps.length - 1));
    }

    const calculateCurrentStepWidth = () => {
        return `${(100 / (steps.length - 1)) * activeStep}%`;
    };

    return (
        <div>
            <div className="steps">
                {
                    steps && steps.length > 0 ?
                    steps.map((stepItem, index) => <div 
                    className={`step ${index <= activeStep ? 'active' : ''}`}
                    style={{width: calculateCurrentStepWidth()}} 
                    key={index}>{stepItem}</div>) : null
                }
            </div>
            <div className="step-buttons-wrapper">
                <button disabled={activeStep === 0} onClick={handlePreviousStep}>
                    Previous Step
                </button>
                <button disabled={activeStep === steps.length - 1} onClick={handleNextStep}>
                    Next Step
                </button>
            </div>
        </div>
       
    )
};

StepProgressBar.propTypes = {
    steps: PropTypes.array,
}

StepProgressBar.defaultProps = {
    steps: []
}

export default StepProgressBar;