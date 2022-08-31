// dividing boards for 3x3 squares
const getBoxId = function (row, col) {
  const rowVal = Math.floor(row / 3) * 3;
  const colVal = Math.floor(col / 3);

  return rowVal + colVal;
};

//
const isValid = function (box, row, col, num) {
  if (box[num] || row[num] || col[num]) {
    return false;
  } else {
    return true;
  }
};

// time (brutal solution) O(9^81) <--- because you are going through all slots and
//                    iterate with all possible values without breaking if the one number is wrong

// T O(9!) for a row x ( for entire boards )
// time (backtracking)  O((9!)^9)

// Space 0(81) - numbers of row and columns  so oz(1)

// the most difficult part was to find constraints - validity     <--- always think about process and break problem down!
const solveBacktrack = function (board, boxes, rows, cols, r, c) {
  if (r === board.length || c === board[0].length) {
    return true;
  } else {
    // do we have empty space?
    if (board[r][c] === ".") {
      // iterating and adding values + checking if added value is valid
      for (let num = 1; num <= 9; num++) {
        // to string and then add number to board
        const numVal = num.toString();
        board[r][c] = numVal;

        // prep data to check if added value is valid
        const boxId = getBoxId(r, c);
        const box = boxes[boxId]; // box ids
        const row = rows[r]; // number of row
        const col = cols[c]; // number of col

        if (isValid(box, row, col, numVal)) {
          // tracking our process
          box[numVal] = true;
          row[numVal] = true;
          col[numVal] = true;

          // changing row + 1                               <---- the most interesting part - collapse of the stack call
          //                                                <---- removal values from "tracking data" and from the board
          if (c === board[0].length - 1) {
            if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
              return true;
            }
            // changing col + 1
          } else {
            if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
              return true;
            }
          }
          // stack collapse so we removing the values and we are going to try other number - "going back"
          delete box[numVal];
          delete row[numVal];
          delete col[numVal];
        }
        // back to empty space - slot on board
        board[r][c] = ".";
      }
    } else {
      // the same situation but in case of existing value in the slot
      if (c === board[0].length - 1) {
        if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
          return true;
        }
      } else {
        if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
          return true;
        }
      }
    }
  }

  return false;
};

const solveSudoku = function (board) {
  const n = board.length;
  const boxes = new Array(n);
  const rows = new Array(n);
  const cols = new Array(n);

  for (let i = 0; i < n; i++) {
    boxes[i] = {}; //   3x3
    rows[i] = {}; //    -->
    cols[i] = {}; //    V
  }

  // filling with data
  // row
  for (let r = 0; r < n; r++) {
    // col
    for (let c = 0; c < n; c++) {
      // empty slot
      if (board[r][c] !== ".") {
        const boxId = getBoxId(r, c);
        const val = board[r][c];
        boxes[boxId][val] = true;
        rows[r][val] = true;
        cols[c][val] = true;
      }
    }
  }

  console.log("boxes", boxes);
  console.log("rows", rows);
  console.log("cols", cols);

  // recursion
  solveBacktrack(board, boxes, rows, cols, 0, 0);
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);
// console.log(board);
