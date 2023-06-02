// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   let words;
//   for (let i = 1; i <= n; i++) {
//     words = "#";
//     for (let j = 1; j < n; j++) {
//       if (i <= j) {
//         words = words + " ";
//       } else words = words + "#";
//     }
//     console.log(words);
//   }
// }

function steps(n, row = 0, stair = "") {
  //base case
  if (n === row) {
    return;
    //do some work
    //reduce n-1
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}
module.exports = steps;
