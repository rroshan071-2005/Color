function getRandomHexColor() {
    const hexCharacters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return hexColor;
}

function changeBackgroundColor() {
    const hexColor = getRandomHexColor();
    document.body.style.backgroundColor = hexColor;
    console.clear();
    console.log(`Background Color Changed to: ${hexColor}`);
}

document.body.addEventListener('click', changeBackgroundColor);
changeBackgroundColor(); 