//테스트케이스만 통과하고 정답은 모두 실패한 코드
// function solution(arr) {
//     var answer = [];
//     if (arr.length == 1) {
//         answer.push(-1)
//     } else {
//         answer = arr.sort((a,b)=>b-a).slice(0, arr.length - 1);
//     }
//     return answer;
// }

function solution(arr) {
  //sort는 기본적으로 배열에 직접적으로 영향을 준다는데..!
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}
