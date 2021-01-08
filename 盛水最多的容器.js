// var maxArea = function(height) {
//     let l = 0,r = height.length-1;
//     let areaNow = 0, areaMax = 0
//     while(r>l){
//         let minH = Math.min(height[r], height[l])
//         areaNow = minH * (r-l);
//         minH == height[l]?l++:r--
//         if(areaNow>areaMax){
//             areaMax = areaNow
//         }
//     }
//     return areaMax
// };

var maxArea = function(height) {
    let l = 0, r = height.length -1, maxArea = 0;
    while(l < r) {
        let minH = Math.min(height[l], height[r])
        maxArea = Math.max(maxArea, minH * (r - l))
        // while(r - 1 > l && height[r - 1] < minH) r--
        // while(l + 1 < r && height[l + 1] < minH) l++
        if(height[r] > height[l])l++
        else r--
    }
    console.log(maxArea);
    return maxArea
};

maxArea([1,8,6,2,5,4,8,3,7])