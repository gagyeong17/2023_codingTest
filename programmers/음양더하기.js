function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i <= signs.length; i++) {
    if (signs[i] === false) {
      //처음에는 absolutes[i] *(-1) = absolutes[i] 이런식으로 음수를 만드려고 했음
      //하지만 SyntaxError가 발생했고 Number로 감싸서 숫자로 만들어 준 후 다시 진행
      absolutes[i] = Number(absolutes[i]) * -1;
    }
    answer = absolutes.reduce((a, b) => a + b);
  }
  return answer;
}
