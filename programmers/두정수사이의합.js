function solution(a, b) {
  var answer = 0;
  //a와 b가 같은 경우 아무 수나 return
  if (a == b) {
    answer = a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let j = b; j <= a; j++) {
      answer += j;
    }
  }

  return answer;
}
