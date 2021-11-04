const findwinner=require('./findwinner.js');


test ("Find the winner ",()=>{
    let board=[['0','X',null],
                    ['0','X',null],
                    ['0',null,null]];
    expect(findWinner(board)).toBe('0');
});
