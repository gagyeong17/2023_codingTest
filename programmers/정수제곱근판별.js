function solution(n) {
  var answer = 0;
  //제곱근 반환 메소드: Math.sqrt(n)
  //아래의 조건문은 제곱이 실수가 나온 경우 -1을 return 하기 위한
  if (Math.sqrt(n) % 1 === 0) {
    answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
  } else {
    answer = -1;
  }
  return answer;
}
