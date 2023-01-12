function solution(phone_number) {
  var answer = "";
  //마지막 4글자만 빼서 다른 글자는 모두 *으로 바꾸기
  //문자열 마지막 찾기 검색: substr(), slice() .. 중 slice 채택
  answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  //*을 phone_number.length - 4만큼 반복하고 뒤에서 4번째 숫자를 붙여주기
  return answer;
}
