var sortString = function(s) {
    s = s.split("");
    s = s.sort((a,b)=>{
        return a.charCodeAt()-b.charCodeAt()
    })
    // console.log(s[1].charCodeAt(),s[1].charCodeAt());
    let tmp = [],m = -1;
    s.reduce((prev,v,i)=>{
        if(prev!=v){
            m+=1
            tmp[m] = []
        }
        tmp[m].push(v)
        return v
    },1)
    console.log(tmp);
    let lens = tmp.map(item=>{
        return item.length
    })
    console.log(lens,8888);
    let j = 0,res = "",max = Math.max(...lens);
    while(j<max){
        if(j%2==0){
            for(let i = 0;i<tmp.length;i++){
                res += tmp[i][j]?tmp[i][j]:""
            }
        }else{
            for(let i = 0;i<tmp.length;i++){
                res += tmp[tmp.length-i-1][j]?tmp[tmp.length-i-1][j]:""
            }
        }
        j+=1
    }
    console.log(res,99);
    return s
};

let s = "aaaabbbbcccc"
let res = sortString(s)
// console.log(res);