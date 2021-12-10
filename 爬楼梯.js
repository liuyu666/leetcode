var climbStairs = function(n) {
    if(n == 1) return 1
    if(n == 2) return 2

    return climbStairs(n-1) + climbStairs(n-2)
};
// 1, 2, 3, 5, 8
// console.log(climbStairs(4), 99)


var clim = function(n, ret1 = 0, ret2 = 1) {
  if(n == 0)return ret2;
  return clim(n-1, ret2, ret1+ret2)
}

/**
 * 3  fn(2 ,1,1)
 * 2  fn(1, 1,2)
 * 1  fn(0, 2,)
 */

console.log(clim(1));
console.log(clim(2));
console.log(clim(3));
console.log(clim(4));
console.log(clim(5));

fn(6) = fn(5, 0,1) = fn(4, 1, 1) = fn(3, 1, 2) = fn(2, 2, 3) = fn(1, 3, 5) = fn(0, 5, 8)

/**
 * 2  2+1
 * 
 */


