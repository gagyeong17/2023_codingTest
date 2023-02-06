function solution(lottos, win_nums) {
  //   var answer = [];
  var win = 0;
  var zero = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] == 0) {
      zero++;
    } else if (win_nums.includes(lottos[i])) {
      win++;
    }
  }
  // win이 0일 때 즉, 0만 6개일 땐 최고1등 최저6등이며 6개의 수가 모두 0이 아니고 전혀 중복되지 않는 수일 땐 최고와 최저 모두 6등이라는 예외사항이 있다.
  // zero == 6 ? answer.push(1, 6) : win == 0 && zero ==0 ? answer.push(6,6) : answer.push(7-(win+zero), 7-win) ;
  // return answer;

  //아래는 7등을 return 하지 않기 위해 최솟값으로 반환하게끔 진행
  let maxRank = Math.min(7 - (win + zero), 6);
  let minRank = Math.min(7 - win, 6);
  return [maxRank, minRank];
}
