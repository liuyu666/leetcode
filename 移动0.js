/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 双指针 快指针跟随循环走，慢指针，定位在第一个0处
// var moveZeroes = function(nums) {
//     let j = 0;//慢指针
//     for(let i = 0;i<nums.length; i++){
//         if(nums[j]!=0){
//            ++j
//         }else{
//             if(nums[i]!=0&&i!=j){
//                 let tmp = nums[j]
//                 nums[j] = nums[i]
//                 nums[i] = tmp
//                 ++j
//             }
//         }
//     }
//     return nums
// };

//将不为0的项加到原有数组中替换末尾剩余项
var moveZeroes = function(nums) {
    let i = 0,insertPos = 0
    for(let i = 0;i<nums.length; i++){
        if(nums[i]!=0){
            nums[insertPos++] = nums[i]
        }
    }
    while(insertPos<nums.length){
        nums[insertPos++] = 0
    }
}

moveZeroes([0,1,0,3,12])

function moveZeroes1(nums) {
  let l = r = 0;
  for (; r < nums.length; r++) {
    if(nums[l] !== 0) {
      l++;
    }else { // 左指针为0 右指针不为0 交换  左指针+1
      if(nums[r] !== 0) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
      }
      
    }

  }
  console.log(nums, 9999);
}

moveZeroes1([0,1,0,3,12])
moveZeroes1([1, 1, 0, 3, 12])

// l一直是第一个0的位置的index，r循环，r!==0
// 0 0 1 0 3 12
// 1 1 0 3 12

// l 2   