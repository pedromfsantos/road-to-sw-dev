function checkCashRegister(price, cash, cid) {
    let changeNumber = cash - price;
  
    const dict = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100,
    }
    //console.log(0.01 + 0.05)
    const cidArray = [...cid]
    let sumOfCidArrayFirst = 0;
    let sumOfCidArraySecond
    let sumOfChange = 0;
    let sumOfChangeTotal = 0;
    let changeArray =  [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
    //console.log(dict[cid[3][0]])
  //console.log(cid[0][1])
  for (let j = 0; j < changeArray.length; j++){
    //sumOfChangeArray += changeArray[j][1]
    sumOfCidArrayFirst += cid[j][1]
    sumOfCidArraySecond += cid[j][1]
  }
  
  
  
    let i = cid.length -1
  
    while (i >= 0){
      //console.log((cid[i][1]))
      if ((changeNumber >= dict[cid[i][0]])&&(parseFloat(cidArray[i][1].toFixed(2)) - parseFloat(dict[cid[i][0]].toFixed(2)) >= 0)){
        //console.log(dict[cid[i][0]])
        //console.log(i)
        cidArray[i][1] = parseFloat(cidArray[i][1].toFixed(2)) - parseFloat(dict[cid[i][0]].toFixed(2))
        //console.log("Compare: ", cidArray[i][1])
        changeNumber = parseFloat(changeNumber.toFixed(2)) - parseFloat(dict[cid[i][0]].toFixed(2))
        //console.log("Com isso:", changeNumber)
        sumOfChange = parseFloat(sumOfChange.toFixed(2)) + parseFloat(dict[cid[i][0]].toFixed(2))
        //sumOfChangeTotal = parseFloat(sumOfChangeTotal.toFixed(2)) + parseFloat(sumOfChange.toFixed(2))
        //sumOfCidArraySecond = parseFloat(sumOfCidArraySecond.toFixed(2)) - parseFloat(sumOfChangeTotal.toFixed(2))
        //console.log(sumOfChangeTotal)
        changeArray[i][1] = parseFloat(sumOfChange.toFixed(2))
        //console.log(change)
      }else{
        sumOfChange = 0;
        i--;
      }
    }
    //console.log(changeArray)
    const newestChangeArray = []
  
    for (let k = 0; k < changeArray.length; k++){
      if (changeArray[k][1] != 0){
        newestChangeArray.push(changeArray[k])
      }
    }
  //console.log(newestChangeArray.length)
  //console.log(changeArray)
  //console.log(cidArray)
  let statusString = "OPEN"
  
  let sumOfChangeArray = 0;
  //sumOfCidArray = 0;
  
  for (let j = 0; j < changeArray.length; j++){
    sumOfChangeArray += changeArray[j][1]
    //sumOfCidArray += cid[j][1]
  }
  
  //console.log(sumOfChangeArray)
  //console.log(sumOfCidArrayFirst)
  let returnObjectArray = newestChangeArray
  if(changeNumber > 0){
    statusString = "INSUFFICIENT_FUNDS"
    returnObjectArray = []
  }else if(sumOfChangeArray == sumOfCidArrayFirst){
    statusString = "CLOSED"
  }
  
  
  
  if (statusString == "CLOSED"){
    returnObjectArray = changeArray
  }else if(statusString == "OPEN"){
    returnObjectArray = newestChangeArray.reverse()
  }
  
    console.log({status: statusString, change: returnObjectArray })
  
    return {status: statusString, change: returnObjectArray };
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])