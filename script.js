// перш за все створимо гравців, та присвоїмо кожному з них відповідний елемент

const playerFactory = (sign) => {
    return {sign}
}

const player1 = playerFactory('X');
const player2 = playerFactory('O');

let gameBoard = (function() {
    'use strict';
    const boardContainer = document.querySelector('.board-container');
    const h1 = document.querySelector('h1');

    let boardContent = ['','','','','','','','',''];

    let currentTurn = 0;

    function displayBoard() {
        // divCounter використовується для створення id
        let divCounter = 0;

        // перед тим, як виведеться div чистимо сторінку
        while (boardContainer.firstChild) {
            boardContainer.removeChild(boardContainer.firstChild)
        }

        // для кожного елемента в масиві створюємо окремий div з цим елементом
        boardContent.forEach((item) => {
            const container = document.createElement('div');

            container.classList.add('board-element');

            // створюємо id для кожного div
            container.id = divCounter;
            divCounter++;

            // передаємо в div вміст масиву
            container.textContent = item;

            boardContainer.appendChild(container);
        })

        // виводим X або O при натисканні на div
        const boardElements = document.querySelectorAll('.board-element');
        boardElements.forEach((element) => {

            // якщо div пустий
            if (element.innerHTML === '') {
                element.addEventListener('click', () => {

                    // масив можна заповняти далі, якщо повідомлення про виграш не було виведене
                    if (h1.innerHTML === '') {
                        // в залежності від парності кроку виводимо O чи X
                        if (currentTurn % 2 === 0) {
                            boardContent.splice(element.id, 1, player1.sign);
                        } else if (currentTurn % 2 !== 0) {
                            boardContent.splice(element.id, 1, player2.sign);
                        }

                        currentTurn++;

                        // оновлення по кліку на div
                        displayBoard()

                    }
                })
            }
        })

        // умови, які необхідно виконати для перемоги X
        if (boardContent[0] === 'X' && boardContent[1] === 'X' && boardContent[2] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[3] === 'X' && boardContent[4] === 'X' && boardContent[5] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[6] === 'X' && boardContent[7] === 'X' && boardContent[8] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[2] === 'X' && boardContent[4] === 'X' && boardContent[6] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[0] === 'X' && boardContent[3] === 'X' && boardContent[6] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[1] === 'X' && boardContent[4] === 'X' && boardContent[7] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[2] === 'X' && boardContent[5] === 'X' && boardContent[8] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        } else if (boardContent[0] === 'X' && boardContent[4] === 'X' && boardContent[8] === 'X') {
            h1.innerHTML = 'Player 1 wins';
        }

        // умови, які необхідно виконати для перемоги  O
        if (boardContent[0] === 'O' && boardContent[1] === 'O' && boardContent[2] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[3] === 'O' && boardContent[4] === 'O' && boardContent[5] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[6] === 'O' && boardContent[7] === 'O' && boardContent[8] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[2] === 'O' && boardContent[4] === 'O' && boardContent[6] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[0] === 'O' && boardContent[3] === 'O' && boardContent[6] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[1] === 'O' && boardContent[4] === 'O' && boardContent[7] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[2] === 'O' && boardContent[5] === 'O' && boardContent[8] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent[0] === 'O' && boardContent[4] === 'O' && boardContent[8] === 'O') {
            h1.innerHTML = 'Player 2 wins';
        } else if (boardContent.every(element => element !== '') && h1.innerHTML === '') {
            h1.innerHTML = 'Draw';
        }

        if (h1.innerHTML !== '') {
            let h1Div = document.getElementById('h1-div');
            let button = document.createElement('button');
            button.textContent = 'reset';
            button.addEventListener('click', () => {
                boardContent = ['','','','','','','','',''];
                h1.innerHTML = '';
                currentTurn = 0;
                displayBoard();
                h1Div.removeChild(button)
            })
            h1Div.appendChild(button);
        }
    }

    displayBoard()

    return {

    };
})();