const colorDisplay = document.getElementById('colorDisplay');
        const colorCode = document.getElementById('colorCode');
        const generateColorBtn = document.getElementById('generateColorBtn');

        function getRandomHexColor() {
            const hexCharacters = '0123456789ABCDEF';
            let hexColor = '#';
            for (let i = 0; i < 6; i++) {
                hexColor += hexCharacters[Math.floor(Math.random() * 16)];
            }
            return hexColor;
        }

        function generateColor() {
            const hexColor = getRandomHexColor();
            colorDisplay.style.backgroundColor = hexColor;
            colorCode.textContent = hexColor;
            console.clear();
            console.log(`Generated HEX Color: ${hexColor}`);
        }

        generateColorBtn.addEventListener('click', generateColor);
        generateColor(); 