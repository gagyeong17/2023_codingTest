function solution(answers) {
  var answer = [];

  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    //[i % one.length]는 answers.length와 다르기 때문에 단순히 i라고만 하면 배열의 길이가 다른 two 와 three 에서 반복문이 더 이어지지 않을 수 있기 때문에 사용
    if (one[i % one.length] === answers[i]) {
      count[0]++;
    }
    if (two[i % two.length] === answers[i]) {
      count[1]++;
    }
    if (three[i % three.length] === answers[i]) {
      count[2]++;
    }
  }

  //count = [2,2,2]라면 3명이 모두 정답을 2개 맞췄다는 것
  let max = Math.max(...count); //따라서 [2,2,2]일 때 max는 2가 나옴

  //그래서 3명의 정답 맞춘 count가 max와 같다면 그 때만 그 인덱스의 1을 더한 값을 return 하게 함
  //[2,2,2]일 경우 [1,2,3]
  //[5,0,0]일 경우 [1]
  for (let j = 0; j < count.length; j++) {
    if (count[j] === max) {
      answer.push(j + 1);
    }
  }

  return answer;
}
