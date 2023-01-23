function solution(n) {
  var answer = [];
  //reverse 배열을 거꾸로 뒤집는 함수
  var num = n.toString().split("").reverse();
  for (let i = 0; i < num.length; i++) {
    answer.push(Number(num[i]));
  }
  return answer;
}
