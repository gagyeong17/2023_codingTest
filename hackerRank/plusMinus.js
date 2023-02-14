function plusMinus(arr) {
  // Write your code here
  let countZero = 0;
  let countPlus = 0;
  let countMinus = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      countZero++;
    } else if (arr[i] > 0) {
      countPlus++;
    } else {
      countMinus++;
    }
  }
  //toFixed()는 소숫점 버리기
  console.log(countPlus / arr.length.toFixed(6));
  console.log(countMinus / arr.length.toFixed(6));
  console.log(countZero / arr.length.toFixed(6));
}
