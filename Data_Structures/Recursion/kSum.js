kSum = (arr,n,target) => {
  let results = [];
  
  let sum = (currentSum,currentArr,arr) => {
    if (currentSum === target && currentArr.length === n){
      results.push(currentArr);
      return;
    }
    if (arr.length === 0){
      return;
    }
    for (var i in arr){
      let tempArr = arr.slice();
      tempArr.splice(i,1)
      sum(currentSum + arr[i],currentArr.concat(arr[i]),tempArr)
    }
  }
  sum(0,[],arr)
  
  return results;
}
