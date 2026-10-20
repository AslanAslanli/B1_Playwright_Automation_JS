let str = "abcabc";

function removeDuplicates(strInput = "") {
  let returnStr = strInput.charAt(0) + "";
  for (let i = 0; i < strInput.length; i++) {
    if(!returnStr.includes(strInput.charAt(i))){
        returnStr += strInput.charAt(i);
    }
  }

  return returnStr;
}


console.log(removeDuplicates(str));