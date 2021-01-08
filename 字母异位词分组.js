var groupAnagrams = function(strs) {
    var h = new Map, prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    let  = []
    for(let item of strs) {
        let sum = item.split('').reduce((p, v, i) => {
            return p * prime[v.charCodeAt() - 97]
        }, 1)
        console.log(sum);
        console.log(7777);
        h.has(sum)? h.get(sum).push(item): h.set(sum, item)
    }
    return Array.from(h.values())

}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])