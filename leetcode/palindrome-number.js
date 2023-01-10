/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //팰린드롬일 경우 true/false 를 도출해야하는 문제
  //짝수, 홀수의 경우로 같은지 파악..?

  //     for (let i= 0;  i <x.length; i++){
  //         if (x[i] == x[x.length-1-i]) {
  //             return true;
  //         }
  // }

  //numbers는 length로 표현할 수 없기 때문에 문자열로 변환
  num = x.toString();
  for (var i = 0; i < num.length; i++) {
    if (num[i] != num[num.length - 1 - i]) return false;
  }
  return true;
};
