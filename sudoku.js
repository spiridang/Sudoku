const fs = require("fs");
const text = fs.readFileSync("./puzzles.txt", "utf-8");
const { EOL } = require("os");

function read() {
  let sudoku = text.trim().split(`${EOL}`);
  // console.log(sudoku)
  return sudoku.map((el) => el.split(""));
}
read();
function solve() {
  const puzzle = read()[0];
  const puzzleArray = [];
  for (let i = 9; i < puzzle.length + 1; i += 9) {
    puzzleArray.push(puzzle.slice(i - 9, i));
  }
  for (let j = 0; j < puzzleArray.length; j++) {
    for (let k = 0; k < puzzleArray[j].length; k++) {
      if (puzzleArray[j][k] === "-") {
        for (let i = 1; i < puzzleArray.length + 1; i++) {
          if (puzzleArray[j][k] === i) {
            puzzleArray[j][k] = (i + 1).toString;
          }
          puzzleArray[j][k] = 'x';
        }
      }
    }
  }
  console.log(puzzleArray);
}

solve();
function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
