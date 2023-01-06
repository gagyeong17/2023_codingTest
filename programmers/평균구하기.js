function solution(arr) {
  var sum = 0;
  var answer = 0;
  //배열의 합을 배열의 length로 나누면 평균이 나옴!
  sum = arr.reduce((a, b) => a + b);
  answer = sum / arr.length;
  return answer;
}
