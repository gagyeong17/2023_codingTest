function solution(numbers) {
  var answer = [];
  var arr = [];
  var newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      var sum = numbers[i] + numbers[j];
      arr.push(sum);
      //Set를 이용하여 중복 제거, Set는 중복 데이터 저장을 허용하지 않는 자료구조
      var set = new Set(arr);
      newArr = [...set];
    }
  }
  //오름차순으로
  answer = newArr.sort((a, b) => a - b);
  return answer;
}
