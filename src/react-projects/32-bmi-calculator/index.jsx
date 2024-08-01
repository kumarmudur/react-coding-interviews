import { useState } from "react";
import './bmi.css';

const BMICalculator = () => {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [bmi, setBMI] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChangeHeight = event => setHeight(event.target.value);

    const handleChangeWeight = event => setWeight(event.target.value);

    const calculateBMI = () => {
        const numericHeight = parseFloat(height);
        const numericWeight = parseFloat(weight);

        if (!height || !weight) {
            setErrorMsg('Please enter both height and weight');
            return
        } else {
          
            if (isNaN(numericHeight) || isNaN(numericWeight) ||  numericHeight <= 0 || numericWeight <= 0) {
                setErrorMsg('Please enter valid numeric values for both height and weight');
                return;
            }
        }
        const calculateHeightInMeters = numericHeight / 100;
        const calculateBmiValue = (
          numericWeight /
          (calculateHeightInMeters * calculateHeightInMeters)
        ).toFixed(2);
        setBMI(calculateBmiValue);
        setErrorMsg("");
    }

    return (
        <div className="bmi-calculator-container">
            <h1>BMI Calculator</h1>
            <div className="input-container">
                <label>Height (cm):</label>
                <input 
                    type="number"
                    value={height}
                    onChange={handleChangeHeight}
                />
            </div>
            <div className="input-container">
                <label>Weight (kg):</label>
                <input 
                    type="number"
                    value={weight}
                    onChange={handleChangeWeight}
                />
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            {errorMsg ? <p className="error-msg-text">{errorMsg}</p> : null}
            {errorMsg !== "" ? null : (
                <p className="bmi-result-text">
                {
                    !bmi ? '' :
                    bmi < 18.5 ? "Underweight" : 
                    bmi >= 18.5 && bmi < 24.9 ? "Normal Weight" : 
                    bmi >= 25 && bmi < 29.9 ? "Overweight" : "Obese"}
                </p>
            )}
        </div>
    )
};

export default BMICalculator;