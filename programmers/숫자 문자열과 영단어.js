function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    //문자열 숫자가 나올 때 "one4seveneight"의 경우 ['','4seveneight']가 되는데
    //이때 arr.join(i)를 통해 1번째에 있는 one을 대체하여 '14seveneight'으로 반환
    //for문을 통해 '1478'이 완성되고 Number에 감써서 return
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
