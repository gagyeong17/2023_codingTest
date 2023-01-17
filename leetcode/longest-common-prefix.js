/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //배열 안에 겹치는 문자열 찾기
  //1번 오답
  // var prefix = ''
  // for (let i=0; i<strs[0].length; i++) {
  //     for (let j =0; j<strs.length; j++) {
  //         if (strs[j][i] == strs[0][i]) {
  //             prefix += strs[0][i] ;
  //         } else return prefix;
  //     }
  // }
  //   -----------------------------------------------
  //2번 오답
  //   var answer = "";
  //   for (let i = 0; i < strs.length; i++) {
  //     for (let j = 0; j < strs[i].length; j++) {
  //       if (strs[i][j] == strs[i + 1][j] && strs[i + 1][j] == strs[i + 2][j]) {
  //         answer = strs[i][j] + strs[i][j + 1];
  //       } else answer;
  //     }
  //   }
  //   return answer;
  //너무 안풀려서 검색 후 작성한 답안
  for (let i = 0; i < strs[0].length; i++) {
    //첫번째 배열을 기준으로 찾아보기
    for (let j of strs) {
      //strs의 요소를 하나씩 꺼내서
      if (j[i] !== strs[0][i]) {
        //다른 문자가 생기기전까지 slice 메서드를 통해
        return j.slice(0, i); //j의 0번째부터 i까지를 배열로 뱉어내기
      }
    }
  }
  return strs[0];
};
