function solution(s) {
  var answer = "";
  //글자의 length 를 파악하여
  //짝수일 때는 가운데 두글자
  //홀수일 때는 가운데 한글자
  if (s.length % 2 === 0) {
    //글자를 두덩이로 나눠서 첫번째 덩어리의 가장 끝에 글자와 두번째 덩어리의 가장 첫 글자를 return
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    //예를 들어 5 글자일 경우 5/2 = 2.5니까 반내림해서 2번째 수를 return
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}
