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