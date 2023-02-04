function solution(x) {
  var string = x.toString();
  var sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }

  return x % sum == 0 ? true : false;
}
