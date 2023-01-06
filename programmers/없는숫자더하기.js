function solution(numbers) {
  var answer = 0;
  //numbers에 0부터 9까지 없는 수 찾아서 더하기
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}
