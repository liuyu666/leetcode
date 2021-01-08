//f(x) = min(f(x-1),f(x+1),f(2*x)))+1
function findMin(x,k){
    console.log(x, k)
    if(x == k)return 0
    if(x % 2 == 0)return Math.min(findMin(x-1, k),findMin(x+1, k),findMin(x/2))+1
    else return Math.min(findMin(x-1, k),findMin(x+1, k))+1
}

// findMin(3,2)

function findAll(x){
    return [x+1, x-1, 2*x]
}
function findMinMinutes(n, k) {
    let tmpArr = findAll(n)
    let flag = 1
    while(true) {
        let arr = tmpArr
        tmpArr = []
        for(let item of arr) {
            if(item == k)return flag
            tmpArr = [...findAll(item), ...tmpArr]
        }
        flag++
    }
}

console.log(findMinMinutes(4,29))