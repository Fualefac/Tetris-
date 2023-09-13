export const TETROMINOS = {
    0: { shape: [[0]], color: '0,0,0'},
    I: {
        shape: [ // the ! shaped tetris block, this will make it take up four squares 
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0]
                ],
                color: '80, 227, 230',
    },
    J: {// the reverse L shaped tetris block,
        shape: [ 
                    [0, 'J', 0],
                    [0, 'J', 0],
                    ['J', 'J', 0]
                ],
                color: '36, 95, 223',
    },
    L: {// the L shaped tetris block,
        shape: [ 
                    [0, 'L', 0],
                    [0, 'L', 0],
                    [0, 'L', 'L']
                ],
                color: '223, 173, 36',
    },
    O: {// the SQUARE shaped tetris block,
        shape: [ 
                    ['O','O'],
                    ['O', 'O']
                ],
                color: '223, 173, 36',
    },
    S: {// the s shaped tetris block,
        shape: [ 
                    [0,'S','S'],
                    ['S','S',0],
                    [0,0,0]
                ],
                color: '48, 56, 211',
    },
    T: {// the T shaped tetris block,
        shape: [ 
                    [0,0,0],
                    ['T','T','T'],
                    [0,'T',0]
                ],
                color: '132, 68, 198',
    },
    Z: {// the Z shaped tetris block,
        shape: [ 
                    ['Z','Z',0],
                    [0,'Z','Z'],
                    [0,0,0]
                ],
                color: '227, 78, 78',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}