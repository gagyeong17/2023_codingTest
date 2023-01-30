function solution(n) {
  var answer = 0;
  //toString() : 10진수을 다른 진수로 변환
  //parseInt() : 다른 진수를 10진수로 변환
  answer = n.toString(3).split("").reverse().join("");
  return parseInt(answer, 3);
}
