function convertToRoman(num) {

    const dict = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I",
    }
  
  
    const keyArr = Object.keys(dict)
    
    let divisor = num;
    let dividendo = num;
    let resto = num
  
    const newArr = []
  
    while(dividendo > 10){
      dividendo = Math.floor(divisor/10)
      resto = divisor%10
      divisor = dividendo
      newArr.push(resto)
    }
    newArr.push(dividendo)
  
    console.log(newArr)
    const romanArray = []
  
    let index = 0;
    //console.log(keyArr)
    for (let k = 0; k < newArr.length; k++){
      if(dict.hasOwnProperty(newArr[k]*(10**k))){
        romanArray.unshift(dict[newArr[k]*(10**k)])
      }else{
        for (let i = 0; i < keyArr.length; i++){
          if (newArr[k]*(10**k) < keyArr[i]){
            //console.log(newArr[k]*10**k)
            index = i // number is in between i and i-1
            break;
          }
        }
        let j = 0
        let jesusMeAjuda = 0;
        //console.log(newArr[k]*(10**k)/10**k)
        if ((newArr[k]*(10**k) > 1)&&(newArr[k]*(10**k) < 5)){
          jesusMeAjuda = newArr[k]*(10**k)
          while (j < jesusMeAjuda){
             romanArray.unshift(dict["1"])
             j++
          }
          j = 0;
        }else if((newArr[k]*(10**k) > 5)&&(newArr[k]*(10**k) < 10)){
          jesusMeAjuda = newArr[k]*(10**k) - 5
          while (j < jesusMeAjuda){
            romanArray.unshift(dict["1"])
            j++
          }
          j = 0;
          romanArray.unshift(dict["5"])
        }else if ((newArr[k]*(10**k) > 10)&&(newArr[k]*(10**k) < 50)){
          jesusMeAjuda = newArr[k]*(10**k)/10**k 
          //romanArray.unshift(dict["10"])
          while (j < jesusMeAjuda){
            romanArray.unshift(dict["10"])
            j++
          }
          j = 0;
        } else if ((newArr[k]*(10**k) > 50)&&(newArr[k]*(10**k) < 100)){
          jesusMeAjuda = newArr[k]*(10**k)/10**k - 5
          while (j < jesusMeAjuda){
            romanArray.unshift(dict["10"])
            j++
          }
          j = 0;
          romanArray.unshift(dict["50"])
        } else if ((newArr[k]*(10**k) >100)&&(newArr[k]*(10**k) < 500)){
          jesusMeAjuda = newArr[k]*(10**k)/10**k
          //romanArray.unshift(dict["10"])
          while (j < jesusMeAjuda){
            romanArray.unshift(dict["100"])
            j++
          }
          j = 0;
        } else if ((newArr[k]*(10**k) > 500)&&(newArr[k]*(10**k) < 1000)){
          jesusMeAjuda = newArr[k]*(10**k)/10**k - 5
          while (j < jesusMeAjuda){
            romanArray.unshift(dict["100"])
            j++
          }
          j = 0;
          romanArray.unshift(dict["500"])
        } else if (newArr[k]*(10**k) > 1000){
          jesusMeAjuda = newArr[k]*(10**k)/10**k
          while (j < jesusMeAjuda){
            romanArray.unshift(dict["1000"])
            j++
          }
          j = 0;
         // romanArray.unshift(dict["500"])
        }
        /*while (j < jesusMeAjuda){
          //console.log(j)
          j++
          romanArray.unshift(dict[keyArr[index-1]])
        }*/
      }
    }
    
    const romanString = romanArray.join("")
    console.log(romanString)
  
   return romanString;
  }
  
  convertToRoman(2014);