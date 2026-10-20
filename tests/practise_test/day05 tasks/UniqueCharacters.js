let string = "AA22A11BCC5DEEF";

function uniqueCharFinder(str) {
  let unqiqueSet = "";
  for (let eachChar of str) {
    let counter = 0;
    for (let index = 0; index < str.length; index++) {
      if (eachChar == str.charAt(index)) {
        counter++;
      }
    }
    if (counter === 1) {
        unqiqueSet += eachChar;
    }
  }

  return unqiqueSet;
}

console.log(uniqueCharFinder(string));
