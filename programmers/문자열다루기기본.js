function solution(s) {
  var answer = true;
  //문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
  //문자열이 숫자만 있다면 true 문자도 섞여있다면 false
  //숫자는 0~9
  if (!(s.length == 4 || s.length == 6)) {
    answer = false;
  } else {
    var arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        answer = false;
      }
    }
  }
  return answer;
}

//단순히
// s.length == 4 || s.length == 6 ? !isNaN(s) : false  이 형태로 코드를 작성했을 경우엔 지수형식("1e22")의 케이스에서 문제가 된다.
// 1의 22승으로 해석이 되기 때문에 isNaN에서 true로 도출되기때문
