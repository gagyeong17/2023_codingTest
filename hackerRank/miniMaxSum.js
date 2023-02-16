function miniMaxSum(arr) {
  //합해서 최소값과 최대값을 구하면 되는데 배열을 정렬해서 제일 마지막 인덱스빼고 합한게 최소값, 제일 처음 인덱스빼고 합한게 최대값으로 계산
  let sum = 0;
  let min = 0;
  let max = 0;
  let newArr = arr.sort();
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
    min = Number(sum) - Number(newArr[newArr.length - 1]);
    max = Number(sum) - Number(newArr[0]);
  }
  console.log(min, max);
}
