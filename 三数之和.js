var threeSum = function(nums) {
    let res = []
    nums.sort((a,b)=>a-b)
    for(let i = 0; i < nums.length; i++){
        if(nums[i]>0)break;
        if(i>0 && nums[i] == nums[i-1])continue;
        let l = i+1
        let r = nums.length -1
        while(l < r) {
            console.log(nums[i], nums[l], nums[r],99)
            const sum = nums[i]+nums[l]+nums[r]
            if(sum == 0){
                res.push([nums[i], nums[l], nums[r]])
                while(l < r && nums[l] == nums[l+1]) l++
                while(l < r && nums[r] == nums[r-1]) r--
                r--
                l++
            }
            else if(sum > 0) r--
            else if(sum < 0) l++

        }
    }
    console.log(res);
    return res
};

threeSum([-1, 0, 1, 2, -1, -4])