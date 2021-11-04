findWinner = arrayBoard => {
    //board = r0,r1,r2,c0,c1,c2,d0,d1
    let board = [];

    for (let row = 0; row < arrayBoard.length; row++) {
        for (let col = 0; col < arrayBoard[row].length; col++) {
            switch (arrayBoard[row][col]) {
                case '0':
                    arrayBoard[row][col] = -1;
                    break;
                case 'X':
                    arrayBoard[row][col] = 1;
                    break;
                default:
                    arrayBoard[row][col] = 0;
            }
            //sum row
            board[row] += arrayBoard[row][col]
            //sum col
            board[row + 3] += arrayBoard[row][col]

        }

    }
    console.log(board);
    return '0';
}

module.exports = findWinner;