import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const increment = () => {
        setCount(count + 1);
        setIsVisible(!isVisible);
    }

    return (
        <div>
           <h1>{count}</h1> 
           { isVisible ? <h1>Visible</h1> : <h1>Not Visible</h1>}
           <button onClick={increment}>Increment the count</button>
        </div>
    );
};

export default Counter;