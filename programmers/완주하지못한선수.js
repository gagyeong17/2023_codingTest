function solution(participants, completions) {
  // hash table
  // Map으로 풀기
  let answer = "";
  let myMap = new Map();

  //참여자 목록을 Map에 등록하기
  for (const participant of participants) {
    // 참여자가 없다면 참여자를 => 1로 등록
    if (!myMap.has(participant)) {
      myMap.set(participant, 1);
    } else {
      // 참여자가 있는데 그 이름이 또 있다면?(동명이인) 기존 1에 + 1해주기 => 2로 등록
      myMap.set(participant, myMap.get(participant) + 1);
    }
  }

  // 완주자 목록을 myMap에서 찾아서 -1 해주기
  for (const completion of completions) {
    myMap.set(completion, myMap.get(completion) - 1);
  }

  // myMap에서 value가 1 이상 인 key를 찾아서 반환하기
  for (const [key, value] of myMap) {
    if (value > 0) {
      answer = key;
    }
  }
  return answer;
}
