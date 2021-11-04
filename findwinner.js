findWinner = arrayBoard => {
    //board = r0,r1,r2,c0,c1,c2,d0,d1
    let board = [0, 0, 0, 0, 0, 0, 0, 0];

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
            board[row] += arrayBoard[row][col];
            //sum col
            board[row + 3] += arrayBoard[row][col];

            //sum diagonal


        }

    }
    board[6] = board[0][0] + board[1][1] + board[2][2];
    board[7] = board[0][2] + board[1][1] + board[2][0];
    console.log(board);
    return '0';
}

module.exports = findWinner;