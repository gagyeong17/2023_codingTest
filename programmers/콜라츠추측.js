function solution(num) {
  var answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      //값이 1이 아닐 땐 계산을 진행하고
      num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    } else {
      //값이 1일 때 횟수를 답으로 return
      return (answer = i);
    }
  }
  //500번 반복 진행 후 1이 안된 경우 -1 return
  return (answer = -1);
}
