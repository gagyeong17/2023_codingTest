//n은 가로 길이, m은 세로길이
//n만큼 *을 그리고 m만큼 아래로 복사
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  //반복된 a를 b만큼 밑으로
  //반복문을 활용해서 a 만큼 옆으로
  for (let i = 0; i < b; i++) {
    let side = "";
    for (j = 0; j < a; j++) {
      side = side + "*";
    }
    console.log(side);
  }
});
