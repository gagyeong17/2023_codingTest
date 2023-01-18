function solution(a, b) {
  //new Date(2016,1,1) -> Mon Feb 01 2016 00:00:00 GMT+0900 (한국 표준시)
  //따라서 월은 -1
  //toString을 활용해 문자열로 바꾸고 slice 메소드로 0인덱스부터 3인덱스까지 자르고
  //toUpperCase로 대문자로 변환
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}
