function solution(array, commands) {
  var answer = [];
  var item = [];
  for (let i = 0; i < commands.length; i++) {
    item = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    console.log(item);
    answer.push(item[commands[i][2] - 1]);
  }

  return answer;
}
