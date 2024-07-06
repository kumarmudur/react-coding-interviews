import { useState } from "react";
import './tip-calculator.css';

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState(null);
    const [tipPercentage, setTipPercentage] = useState(10);
    const [splitCount, setSplitCount] = useState(1);
    const [tipAmount, setTipAmount] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const handleBillAmount = (event) => {
        setBillAmount(event.target.value);
    }

    const handleTipPercentage = (event) => {
        setTipPercentage(event.target.value);
    }

    const handleSplitCount = (event) => {
        setSplitCount(event.target.value);
    }

    const handleCalculateTip = () => {
        if (
            !billAmount || 
            billAmount <= 0 || 
            !tipPercentage || 
            tipPercentage <= 0
        ) {
            setTipAmount(null);
            setErrorMsg('Please enter valid Bill amount and Tip percentage');
            return;
        }

        const bill = parseFloat(billAmount);
        const tip = (bill * tipPercentage) / 100;
        const totalAmount = bill + tip;
        const tipAmountPerPerson = tip /splitCount;
        const totalAmountPerPerson = totalAmount / splitCount;

        setTipAmount({
            totalAmount: totalAmount.toFixed(2),
            tipPerPerson: tipAmountPerPerson.toFixed(2),
            totalPerPerson: totalAmountPerPerson.toFixed(2)
        });
        setErrorMsg('');
    }

    return (
        <div className="tip-calculator">
            <h1>Tip Calculator</h1>
            <div className="input-container">
                <label>Bill Amount:</label>
                <input type="number" value={billAmount} onChange={handleBillAmount}/>
            </div>
            <div className="input-container">
                <label>Tip Percentage:</label>
                <input type="number" value={tipPercentage} onChange={handleTipPercentage}/>
            </div>
            <div className="input-container">
                <label>Number of People:</label>
                <input type="number" value={splitCount} onChange={handleSplitCount}/>
            </div>
            <button onClick={handleCalculateTip}>Calculate Tip</button>
            {
                errorMsg ? <p className="error-message">{errorMsg}</p> : null
            }
            {
                tipAmount ? <div className="tip-result-container">
                    <p>Total Amount: {tipAmount.totalAmount}</p>
                    <p>Tip per Person: {tipAmount.tipPerPerson}</p>
                    <p>Total Amount per Person: {tipAmount.totalPerPerson}</p>
                </div> : null
            }
        </div>
    )
};

export default TipCalculator;