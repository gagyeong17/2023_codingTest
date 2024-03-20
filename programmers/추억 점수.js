function solution(name, yearning, photo) {
  let answer = [];
  let obj = {};
  // 1. 추억하는 사람과 그리움 점수를 객체로 만들고
  name.forEach((key, idx) => (obj[key] = yearning[idx]));

  // 2. 사진 속의 인물과 추억하는 사람이 겹치는지 확인 후 계산
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      // obj의 키값이 photo[i][j]와 겹치는지 찾고 겹치면 그 밸류값 구하기
      if (obj[photo[i][j]]) {
        sum += obj[photo[i][j]];
      }
    }
    answer.push(sum);
  }
  return answer;
}
