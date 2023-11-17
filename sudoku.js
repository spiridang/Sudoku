const fs = require('fs');
const text = fs.readFileSync('./puzzles.txt', 'utf-8');
const { EOL } = require('os');

function read() {
  let sudoku = text.trim().split(`${EOL}`);
// console.log(sudoku)
  return sudoku.map((el) => el.split('')); 
}
read()
function solve() {
  const puzzle = read()[1];
  const puzzleArray = [];
  for (let i = 9; i < puzzle.length + 1; i += 9) {
    puzzleArray.push(puzzle.slice(i - 9, i));
  }console.log(puzzleArray)
}

solve()
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
