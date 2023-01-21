function solution(participant, completion) {
  //이름을 알파벳 순으로 정렬하고
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    //i번째 순서의 참가자가 같지 않을 경우 return
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
