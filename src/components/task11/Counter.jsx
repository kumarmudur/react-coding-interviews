import { useState } from 'react';

const Colors = {
    0: 'yellow',
    1: 'red',
    2: 'green',
    3: 'blue',
    4: 'magenta',
    5: 'orange',
}

const Counter = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(Colors[0]);

    const handleClick = () => {
        console.log('count..', count);
        if (count === 5) {
            setCount(0);
            setBackground(0);
        } else {
            setCount(count + 1);
            setBackground(count + 1);
        }
    }

    const setBackground = (count) => {
        setColor(Colors[count]);
    }

    return (
        <div style={{backgroundColor: color}}>
            <p>Count: { count }</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Counter;