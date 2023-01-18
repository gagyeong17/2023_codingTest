function solution(s) {
  var answer = true;
  var countP = 0;
  var countY = 0;
  var upper = s.toUpperCase();
  //주어진 문자열을 대문자로 모든 바꾸고 p와 y의 개수를 확인해서 그 값이 같을 경우에만 true를 return 하도록
  for (let i = 0; i < upper.length; i++) {
    if (upper[i] == "P") {
      countP++;
    }
    if (upper[i] == "Y") {
      countY++;
    }
  }
  if (countP == countY) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
