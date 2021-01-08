var climbStairs = function(n) {
    if(n == 1) return 1
    if(n == 2) return 2

    return climbStairs(n-1) + climbStairs(n-2)
};
// 1, 2, 3, 5, 8
console.log(climbStairs(4), 99)
