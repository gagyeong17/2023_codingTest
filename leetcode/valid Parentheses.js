/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var arr = [];
  var parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  var open = Object.keys(parentheses); // ["(", "{", "["]

  for (let i = 0; i < s.length; i++) {
    //열린괄호에 i가 들어있다면? 빈배열주머니에 담아두고
    if (open.includes(s[i])) {
      arr.push(s[i]);
    } else {
      //닫힌 괄호가 열린괄호의 짝꿍인지 찾고 배열에서 없애준다  a['('] => ')'
      if (parentheses[arr[arr.length - 1]] == s[i]) {
        //마지막 열린괄호가 짝꿍이라면
        arr.pop(); //배열의 마지막을 없애준다.
        //아니라면 false 반환
      } else {
        return false;
      }
    }
  }
  //for문 이후 arr길이가 0이면 true를 남아있다면 false를 리턴하게 한다(남아있다면 짝꿍을 못찾았다는 의미)
  return !arr.length;
};

//알고리즘 자료구조 중에서 스택을 활용한 문제
//후입선출 자료구조: LIFO(Last In First Out)
