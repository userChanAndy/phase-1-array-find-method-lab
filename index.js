const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

const superbowlWin = array => {
    let newArr = array.find(array => array.result === "W") 
    if(newArr){
        return newArr.year
    } else {
        return undefined
    }
}




