function filterRestaurants(restaurants, filters) {
    let values = {}
    let tmp = restaurants.filter((item,index)=>{
      values[item[0]] = index
        //Flavor = 1, MaxPrice = 40  MaxDistance = 10
        //id rating flav price distance
      if (filters[0]) {//如果是辣的
        return filters[0] == item[2] && filters[1] >= item[3] && filters[2] >= item[4]
      } else {
        return filters[1] >= item[3] && filters[2] >= item[4]
      }
    })
    tmp.sort((a,b)=>{
      if(a[1]==b[1])return b[0]-a[0];
      return b[1]-a[1]
    })
    console.log(tmp,"9998");
    let res = []
    tmp.forEach(item=>{
        res.push(values[item[0]])
    })
    return res
}
//id rating flav price distance
filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], [1, 40, 10])