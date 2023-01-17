/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  //문자의 i번째가 i+1보다 크다면 [i+1] + 문자[i], 작다면 문자[i+1] - 문자[i]
  const numbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  var answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (numbers[s[i + 1]] > numbers[s[i]]) {
      answer -= numbers[s[i]];
    } else {
      answer += numbers[s[i]];
    }
  }
  return answer;
};
