function telephoneCheck(str) {
  
    //test ()
  
    const telArray = str.split("")
  
    const telArrayCharFiltered = telArray.filter(element =>
    /\d/.test(element))
  
    console.log(telArrayCharFiltered)
  
    const telArrayDigitBlocks = str.split(/\D/)
    const telArrayDigitBlocksWOBlanks = telArrayDigitBlocks.filter(element => element != "")
  
  console.log(telArrayDigitBlocksWOBlanks)
  
    const telArrayChar = str.split(/\d/)
    const telArrayCharWOBlanks = telArrayChar.filter(element => element != "")
  
  console.log(telArrayCharWOBlanks)
  
  const numberOfNumbers = telArrayCharFiltered.length
  
  if ((numberOfNumbers == 10)||(numberOfNumbers == 11)){
    //tamanho ok
    if (numberOfNumbers == 11){
      //check first digit it should be one 
      if(telArrayCharFiltered[0]!="1"){
        return false
      }
  
    }
    //tamanho não importa vamos checar os digitos.Check blocs
    if(telArrayDigitBlocksWOBlanks.length >= 3){
      if(telArrayDigitBlocksWOBlanks.length == 3){
        if (telArrayDigitBlocksWOBlanks[0].length != 3){
          return false
        }
        if (telArrayDigitBlocksWOBlanks[1].length != 3){
          return false
        }
        if (telArrayDigitBlocksWOBlanks[2].length != 4){
          return false
        }
        if((str.includes("("))&&(!str.includes(")"))){
          return false
        }
        if ((str.includes(")"))&&(!str.includes("("))){
          console.log("ue")
          return false
        }
        if(str.indexOf("(") > str.indexOf(")")){
          return false
        }
        return true
      }else{
        
        if (telArrayDigitBlocksWOBlanks[0].length != 1){
          
          return false
        }
        if (telArrayDigitBlocksWOBlanks[1].length != 3){
          
          return false
        }
        if (telArrayDigitBlocksWOBlanks[2].length != 3){
          
          return false
       }
        if (telArrayDigitBlocksWOBlanks[3].length != 4){
          
          return false
        }
        //check symbols now
        if((str.includes("("))&&(!str.includes(")"))){
          return false
        }
        if ((str.includes(")"))&&(!str.includes("("))){
          console.log("ue")
          return false
        }
        if(str.indexOf("(") > str.indexOf(")")){
          return false
        }
        if(str.indexOf("-") == 0){
          return false
        }
      }
      return true
    }
    //Menos blocos pode ser monolitico
    if(str.indexOf(")") == str.length -1){
      return false
    }
    return true
  
  }else{ 
    // numero de numeros fora do esperado.
    return false
  }
  
  
  
    //return true;
  }
  
  telephoneCheck("1 555)555-5555");