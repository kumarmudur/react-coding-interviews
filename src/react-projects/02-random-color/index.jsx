import { useState } from "react";

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const randomColorUtility = length => {
        return Math.floor(Math.random() * length);
    }

    const handleCreateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    const handleCreateRandomRGBColor = () => {

    }

    

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor }>Generate Random Color</button> 
        </div>
    );
};

export default RandomColor;