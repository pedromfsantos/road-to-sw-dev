function palindrome(str) {
  
    const newArr = str.toLowerCase().split("").filter(element =>
    /[^\W_]/.test(element))
  
    const trueArr = [];
    
    //console.log(Math.ceil(newArr.length/2))
    //console.log(newArr)
    for (let i = 1; i <= Math.ceil(newArr.length/2); i++){
        console.log("Compare " + newArr[i-1] + " com " + newArr[newArr.length-i])
        trueArr.push((newArr[i-1] == newArr[newArr.length - i]))
    }
    
    console.log(trueArr)
    
  
    return trueArr.every(element=> element);
  }
  
  palindrome("My age is 0, 0 si ega ym.");