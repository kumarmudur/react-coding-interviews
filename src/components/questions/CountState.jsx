import { useState } from 'react';

const CountState = () => {
    const [count, setCount] = useState(0);
    //const [name, setName] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const increment = () => {
        setCount(count + 1);
        console.log(count);
        setIsVisible(!isVisible);
    }

    return (
        <div className='App'>
            <h1>{count}</h1>
            { isVisible ? <h1>Visible</h1> : <h1>Not Visible</h1> }
            <button onClick={increment}>Increment the count</button>
        </div>
    );
};

export default CountState;