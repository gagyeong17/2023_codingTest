// function fizzBuzz(n) {
//     // Write your code here
//     let arr = [];
//     let three  = 0;
//     let five = 0;
//     let all = 0;
//     for (let i=1; i<n; i++) {
//         arr.push(i);
//         if (i % 3 == 0) {
//             three++;
//             arr.splice(0,three,'Fizz');
//         } else if (i % 5 == 0) {
//             five++;
//             arr.splice(0,five,'Buzz');
//         } else if (i % 3 == 0 && (i+1) % 5 == 0){
//             all++;
//             arr.splice(0,all,'FizzBuzz');
//         }
//         console.log(arr[i])
//     }

// }

//맨처음 접근을 아예 이상하게 해서 계속 undefined 나옴
function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
