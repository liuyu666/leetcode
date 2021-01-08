var isValid = function(s) {
    let values = {
        '{':'}',
        '(':')',
        '[':']',
    }
    let arr = s.split('')
    console.log(arr);
    let stack = []
    for(let item of arr) {
        console.log(item);
        if(item == '{' || item == '[' || item == '('){
            stack.push(item)
        }else{
            let key = stack.pop()
            console.log(key,values[key],values[key] != item,"key");
            if(!key || values[key] != item) return false
        }
    }
    return !Boolean(stack.length)
};

isValid('(]')