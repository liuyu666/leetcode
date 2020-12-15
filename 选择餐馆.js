/**
 * input: number[][], number[]
 * output: number[]
 */
function filterRestaurants(restaurants, filters) {
  let values = {},res = [];
  let filterRest = restaurants.filter((item,index)=>{
    values[item[0]] = index
    if(filters[0]){
      console.log(item);
      return filters[0] == item[2] && item[3] <= filters[1] && item[4] <= filters[2]
    }else {
      return item[3] <= filters[1] &&  item[4] <= filters[2]
    }
  })
  filterRest.sort((a,b)=>{
    if(a[1] == b[1])return b[0] - a[0]
    return b[1] - a[1]
  })
  filterRest.forEach(item=>{
    res.push(values[item[0]])
  })
  console.log(res)
  return res
}

filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], [1, 40, 10])