const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container');
const hexCopyBtn = document.querySelector('.hex-copy-color');

// Create Random HEX color
hexBtn.addEventListener('click', () => {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = '';
    let charSetLength = characterSet.length;

    for (let i = 0; i < 6; ++i) {
        hexColorOutput += characterSet.charAt(
            Math.floor(Math.random() * charSetLength)
        );
    }

    hexColorValue.innerHTML = `#${hexColorOutput}`;
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color = `#${hexColorOutput}`;

    console.log('hexColorOutput....', hexColorOutput);
});

// Create RGB color 
const rgbBtn = document.getElementById('rgb-btn');
const redInputRange = document.getElementById('red');
const greenInputRange = document.getElementById('green');
const blueInputRange = document.getElementById('blue');
const rgbColorContainer = document.querySelector('.rgb-color-container');
const rgbCopyBtn =document.querySelector('.rgb-copy-color');
const rgbColorValue = document.querySelector('.rgb-color-value');

rgbBtn.addEventListener('click', () => {
    let extractRedValue = redInputRange.value;
    let extractGreenValue = greenInputRange.value;
    let extractBlueInput = blueInputRange.value;

    rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueInput})`;
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueInput})`;
    console.log(extractRedValue, extractGreenValue, extractBlueInput);
});

const copyHexColorToClipBoard = () => {
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert('Hex color is copied to clipboard');
};

const copyRGBColorToClipBoard = () => {
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert('RGB color is copied to clipboard');

}

hexCopyBtn.addEventListener('click', copyHexColorToClipBoard);
rgbCopyBtn.addEventListener('click', copyRGBColorToClipBoard);