let string1 = "I love java";

function secondWordReverser(str){
    let arr = str.split(" ");
    let reversedSecondString = "";

    for (let index = arr[1].length-1; index >= 0; index--) {
      reversedSecondString += arr[1].charAt(index);
    }

    return str.replace(arr[1], reversedSecondString);
}

console.log(secondWordReverser(string1));