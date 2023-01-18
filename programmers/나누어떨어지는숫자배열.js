function solution(arr, divisor) {
  var answer = [];
  //나누어 떨어지는 수만 배열에 담고
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }
  //나누어 떨어지는 수가 없다면 if 문에서 answer은 []로 나온다. 따라서 length==0일 때 [-1]로 도출하게끔 작성
  if (answer.length == 0) {
    answer = [-1];
  }
  //오름차순으로 return
  return answer.sort((a, b) => a - b);
}
