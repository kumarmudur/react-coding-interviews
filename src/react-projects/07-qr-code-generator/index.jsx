
import { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleChange = event => setInput(event.target.value);

    const handleGenerateQRCode = () => {
        setQrCode(input);
        setInput('');
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input 
                    onChange={handleChange} 
                    type="text" 
                    name="qr-code" 
                    placeholder="Enter your value here"
                    value={input}
                />
                <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQRCode}>Generate</button>
            </div>
            <div>
                <QRCode 
                    id='qr-code-value'
                    value={qrCode}
                    size={400}
                    bgColor='#fff'
                />
            </div>
        </div>
    );
};

export default QRCodeGenerator;