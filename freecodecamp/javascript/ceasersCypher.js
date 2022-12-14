function rot13(str) {
  
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
  
    console.log(encoder.encode("Z"))
    console.log(encoder.encode("A")[0] + 13)
  
    console.log(encoder.encode("Z"))
  
    const encodedArray = encoder.encode(str)
  
    for (let i = 0; i < encodedArray.length ; i++){
      if ((encodedArray[i] >= 65)&&(encodedArray[i] <= 90))
        if ( encodedArray[i] < encoder.encode("A")[0] + 13){
          let diff = encodedArray[i] - encoder.encode("A")[0]
          encodedArray[i] = encoder.encode("Z")[0] + diff - 12
        }else {
          encodedArray[i] = encodedArray[i] - 13
        }
    }
  
    //console.log(encodedArray)
  
    const decodedStr = decoder.decode(encodedArray)
    //console.log(encoder.encode("W"))
    console.log(decodedStr)
    return decodedStr;
  }
  
  rot13("SERR PBQR PNZC");