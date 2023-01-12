function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    var sum = [];
    //var a = [[1,2],[2,3]] , var b = [[3,4],[5,6]] 일 때
    //a의 첫번째 인덱스의 0번 숫자와 b의 첫번재 인덱스의 0번 숫자를 더하기 위한 이중반복문
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }

  return answer; //[[4,6],[7,9]]
}
