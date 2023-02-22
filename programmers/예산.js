function solution(d, budget) {
  var count = 0;
  d.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      count++;
    } else {
      // 예산이 멈추면 count 멈추기
      break;
    }
  }

  return count;
}
