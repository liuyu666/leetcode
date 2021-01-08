/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    var i = 0,j = 0;
    console.log(name[i] ,typed[j],1);
    for(j;j<typed.length;j++){
        console.log(name[i] ,typed[j],2);
      if(name[i] == typed[j]){
          i++
      }else if(i<name.length&&name[i-1] == typed[j]){
      }else{
          return false
      }
    }
    return i == name.length
};

isLongPressedName("vtkgn","vttkgnn")

