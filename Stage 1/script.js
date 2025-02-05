const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33A1FF', '#A1FF33'];
        let targetColor = '';
        let score = 0;

        function startGame() {
            // Select a new random color
            targetColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Update the color box
            const colorBox = document.getElementById('colorBox');
            colorBox.style.backgroundColor = targetColor;

            // Reset game messages
            document.getElementById('gameStatus').textContent = 'Guess the correct color!';
            generateColorButtons();
        }

        function generateColorButtons() {
            const optionsContainer = document.getElementById('colorOptions');
            optionsContainer.innerHTML = '';

            // Shuffle colors for more randomness
            const shuffledColors = colors.sort(() => Math.random() - 0.5);

            shuffledColors.forEach(color => {
                const button = document.createElement('button');
                button.classList.add('color-btn');
                button.style.backgroundColor = color;
                button.setAttribute('data-testid', 'colorOption');

                button.addEventListener('click', () => checkGuess(color));

                optionsContainer.appendChild(button);
            });
        }

        function checkGuess(selectedColor) {
            const statusElement = document.getElementById('gameStatus');
            const scoreElement = document.getElementById('score');

            if (selectedColor === targetColor) {
                statusElement.textContent = 'Correct! 🎉';
                score++;
            } else {
                statusElement.textContent = 'Wrong! Try Again.';
            }

            scoreElement.textContent = `Score: ${score}`;
        }

        document.getElementById('newGameButton').addEventListener('click', startGame);

        // Start the game on page load
        startGame();