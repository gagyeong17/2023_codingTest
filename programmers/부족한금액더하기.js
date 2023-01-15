function solution(price, money, count) {
  var answer = 0;
  var pay = 0; //지불 해야할 금액
  //만약 count 가 0이 아니라면 pay - money 가 음수일 때 값이 얼마인지 (모자라는 금액)
  //양수라면 0을 return
  for (let i = 1; i <= count; i++) {
    pay += price * i; //( 여기서 습관적으로 return 을 작성하는 바람에 괜한 시간을 버림)
  }
  if (pay < money) {
    answer = 0;
  } else {
    answer = pay - money;
  }
  return answer;
}
