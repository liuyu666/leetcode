var isAnagram = function(s, t) {
    let map = {};
    if(s.length !== t.length) return false
    s = s.split('')
    t = t.split('')
    for(let i = 0; i<s.length; i++) {
        if(map[s[i]] === undefined){
            map[s[i]] = 1
        }else{
            map[s[i]] ++
        }
    }
    console.log(map);
    for(let item of t) {
        console.log(item,map[item]);
        if(map[item] === undefined || map[item] < 1) return false
        map[item] --
    }
    return true
};

isAnagram("aacc", "ccac")

var isAnagram = function(s, t) {
    return s.length === t.length 
    && 
    s.split('').reduce(
        (h, v, i) => (h[s[i].charCodeAt() - 97]++, h[t[i].charCodeAt() - 97]--, h), 
        Array(26).fill(0)
    ).every(v => !v)
};
