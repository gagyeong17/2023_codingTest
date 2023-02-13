function diagonalDifference(arr) {
  // Write your code here
  var rightAnswer = 0;
  var leftAnswer = 0;
  for (let i = 0; i < arr.length; i++) {
    rightAnswer += arr[i][i];
    leftAnswer += arr[i][arr.length - 1 - i];
  }
  //Math.abs 절대값 구하는 내장함수 활용
  return Math.abs(leftAnswer - rightAnswer);
}
