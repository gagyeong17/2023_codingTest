function solution(s) {
  //     var answer = '';
  //     var string = s.split('').reverse().join('');
  //     var replaced_str = '';

  //     for (let i=0; i<string.length; i++) {
  //         if (string[i] == string[i].toUpperCase()) { //i번째가 대문자라면
  //              replaced_str =  string.replace(string[i].toUpperCase(), ''); //대문자만 빼서
  //             console.log(replaced_str)
  //             answer = replaced_str + string[i].toUpperCase() // 뒤에 합치기
  //         } else {
  //             return string;
  //         }

  //     }

  var answer = s.split("").sort().reverse().join("");
  return answer;
}

// 알파벳은 sort()를 할 경우, 자동으로 대문자가 먼저 A부터 Z로 정렬되고, 소문자가 a->z 로 정렬

//나는 맨처음에 var answer = s.split("").reverse().join(""); 로만 작성해서 위와 같은 뻘짓을 하게 됐다
