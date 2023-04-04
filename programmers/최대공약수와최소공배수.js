function solution(n, m) {
  let max = 0; //최대공약수
  let min = 0; //최소공배수

  let num = n > m ? n : m;
  for (let i = 0; i < num; i++) {
    if (n % i == 0 && m % i == 0) {
      //나머지가 0이 될 때 최대공약수
      max = i;
    }
  }
  min = (n * m) / max; //최소 공배수 식

  return [max, min];
}
