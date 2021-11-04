const findwinner = require('./findwinner.js');


test("Find the winner 0 in column 1 .", () => {
    let board = [
        ['0', 'X', null],
        ['0', 'X', null],
        ['0', null, null]];
    expect(findWinner(board)).toBe('0');
});

test("Find the winner 0 in column 2 .", () => {
    let board = [
        ['X', '0', null],
        ['X', '0', null],
        [null, '0', null]];
    expect(findWinner(board)).toBe('0');
});

test("Find the winner 0 in column 3 .", () => {
    let board = [
        ['X', null, '0'],
        ['X', null, '0'],
        [null, null, '0']];
    expect(findWinner(board)).toBe('0');
});

test("Find the winner X in row 1.", () => {
    let board = [
        ['X', 'X', 'X'],
        ['X', null, '0'],
        ['0', null, '0']];
    expect(findWinner(board)).toBe('X');

});
test("Find the winner X in row 2.", () => {
    let board = [
        ['0', 'X', null],
        ['X', 'X', 'X'],
        ['0', null, null]];
    expect(findWinner(board)).toBe('X');
});

test("Find the winner X in row 3.", () => {
    let board = [
        ['0', 'X', null],
        ['0', null, null],
        ['X', 'X', 'X']];
    expect(findWinner(board)).toBe('X');
});

test("Find the winner X on the diagonal 1.", () => {
    let board = [
        ['X', '0', null],
        ['0', 'X', null],
        [null, '0', 'X']];
    expect(findWinner(board)).toBe('X');
});

test("Find the winner X on the diagonal 2.", () => {
    let board = [
        [null, '0', 'X'],
        ['0', 'X', null],
        ['X', '0', null]];
    expect(findWinner(board)).toBe('X');
});


test("Find the winner 0 on the diagonal 1.", () => {
    let board =
        [['0', '0', null],
        ['X', '0', null],
        [null, 'X', '0']];
    expect(findWinner(board)).toBe('0');
});

test("Find the winner 0 on the diagonal 2.", () => {
    let board =
        [[null, 'X', '0'],
        ['X', '0', null],
        ['0', 'X', null]];
    expect(findWinner(board)).toBe('0');
});
test("no-win game.", () => {
    let board =
        [[null, 'X', '0'],
        ['X', null, null],
        ['0', 'X', '0']];
    expect(findWinner(board)).toBe('');
});