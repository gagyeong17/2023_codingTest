function solution(sizes) {
  var w = [];
  var h = [];
  for (let i = 0; i < sizes.length; i++) {
    var max = Math.max(sizes[i][0], sizes[i][1]); //i번째 배열 중 더 큰 수를 max로
    var min = Math.min(sizes[i][0], sizes[i][1]); //i번째 배열 중 더 작은 수를 min으로
    w.push(max); //큰 수를 가로 배열에
    h.push(min); //작은 수를 세로 배열에
  }
  return Math.max(...w) * Math.max(...h); //그 중에서 가장 큰 가로 세로 원소를 곱해주면 직사각형 넓이
}
