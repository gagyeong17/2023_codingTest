/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //배열의 합이 몇번째 인덱스의 수 인지
  var arr = [];
  //그 다음 인덱스만 가능하다고 생각하고 i+1을 넣는다고 생각했지만, [0,3]이 정답인 경우 오답으로 나옴
  // for (let i=0; i<nums.length; i++) {
  //     if (nums[i] + nums[i+1] == target) {
  //         arr.push(i, i+1);
  //         return arr;
  //     }
  // }
  for (let i = 0; i <= nums.length; i++) {
    //따라서 반복문을 다시 한 번 작성해서 정답 도출
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        arr.push(i, j);
        return arr;
      }
    }
  }
};
