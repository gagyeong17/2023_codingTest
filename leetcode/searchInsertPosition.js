/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //이진탐색, 시간복잡도, 빅오표기법
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2); //[1,3,5,6]일 경우 mid = 2
    if (nums[mid] == target) {
      //nums[2] = 5 는 target이 5일 때
      return nums.indexOf(target); //따라서 인덱스 return
    } else if (nums[mid] < target) {
      //nums[2] = 5 는 target이 7일 때
      left = mid + 1; //1. 3이 나와서 다시 while문 돌아서 2. else if 로 와서 left=4로 while 문 탈출
    } else {
      //nums[2] = 5 는 target이 2일 때
      right = mid; //바로 while문 탈출해서 left return
    }
  }
  return left;
};
