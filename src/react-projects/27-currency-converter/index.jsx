import { useEffect, useState } from "react";
import './currency.css'

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR')
    const [exchangeRate, setExchangeRate] = useState();
    const [convertedAmount, setConvertedAmount] = useState();

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    }

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    }

    const fetchExchangeRate = async () => {
        const response = await fetch(
            `https://open.er-api.com/v6/latest/${fromCurrency}`,
            {
              method: "GET",
            }
        );
        const result = await response.json();
        const calculatedRate = result?.rates[toCurrency];
        setExchangeRate(calculatedRate);
        setConvertedAmount((amount * calculatedRate).toFixed(2));
        console.log('result', result);
    }

    useEffect(() => {
        fetchExchangeRate();
    }, [fromCurrency, toCurrency, amount]);

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>
            <div className="input-container">
                <input 
                    value={amount}
                    onChange={handleAmountChange}
                    type="number"
                    name="fromCurrency"
                    placeholder="Enter Amount"
                />
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value={'USD'}>USD</option>
                    <option value={'INR'}>INR</option>
                    <option value={'EUR'}>EUR</option>
                </select>
            </div>
            <p className="to">To</p>
            <div className="input-container">
                <input type="text" value={convertedAmount} readOnly />
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value={'EUR'}>EUR</option>
                    <option value={'INR'}>INR</option>
                    <option value={'USD'}>USD</option>
                </select>
            </div>
            <p className="exchange-rate">
                Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
            </p>
        </div>
    )
};

export default CurrencyConverter;
