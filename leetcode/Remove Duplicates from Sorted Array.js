/**
 * @param {number[]} nums
 * @return {number}
 */

//중복된 값을 없애고 배열의 length 파악하기
//중복된 값을 어떻게 찾지?
//값이 같다면 인덱스가 낮은 값을 놔두고(indexOf) 중복 된 값을 제거한(filter) 배열의 length 찾기
//단, 핵심은 nums 자체가 변경되어야 함! 새로운 배열 생성 X
//배열 nums는 중복되지 않는 수로 앞부분이 정렬되어야한다.

var removeDuplicates = function (nums) {
  // var newArr = nums.filter((e, i) => nums.indexOf(e) === i);
  // return newArr;
  //위는 중복된 값을 제거한 새로운 배열 생성한 틀린 식

  if (nums.length == 0) return 0;
  let prev = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[prev]) {
      prev++;
      nums[prev] = nums[i];
    }
  }
  return prev + 1;

  // 만약 배열이 0이라면 0을 return
  // 0이 아니라면 배열의 1번째부터 중복된 값인지 체크하고 중복된다면,
  // 다음 인덱스로 넘어가며 체크하고 조건에 해당된다면 중복된 값으로 원소를 변경해준다.
};
