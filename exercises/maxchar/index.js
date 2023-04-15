// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //loop over the string
  const obj = {};
  for (char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  //and create object by counting each letter
  const values = Object.values(obj);
  const max = Math.max(...values);
  let answer;

  Object.entries(obj).forEach(([key, value]) => {
    if (value === max) {
      answer = key;
    }
  });

  return answer;
  //and find the max char
}

module.exports = maxChar;
