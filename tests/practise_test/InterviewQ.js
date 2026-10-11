/*
create a function that takes a string as a param. and then return "ch" occurences. "ch" case sensitivity ignored
*/

let str1 = "RandomCH chString how many"; // expected 2
console.log(str1.length) // lenght is 26. older for loop had 24 iterations. the newer for loop 8-9
let str2 = "bla bla bla"; // expected 0
let str3 = ""; // expected 0

// count "ch"s
function chCounter(strInput) {
  let strLower = strInput.toLowerCase(); // "randomch chstring how many" // 25 23
                                         //  0123456789   strLower.substring(6) = "ch chstring how many"
                                         // h chstring how many
                                         // strLower.substring(0) = "randomch chstring how many"
  let counter = 0;

  if (!strLower.includes("ch")) {
    return 0;
  }

  for (let i = 0; i < strLower.length; i++) {
    if (strLower.substring(i).startsWith("ch")) {
      counter++; 
      i++;

      if (!strLower.substring(i).includes("ch")) {
        return counter;
      }
    }
  
  return counter;
}

console.log(chCounter(str1)); // should print 2
console.log(chCounter(str2)); // should print 0
console.log(chCounter(str3)); 

}
