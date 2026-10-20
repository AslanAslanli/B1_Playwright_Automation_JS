let str = "It started to snow in Chicago";

let str2 = str.repeat(2);
console.log(str2);

function reverseStringParts (stringInput) {
    let returnStr = "";
    let arr = stringInput.split(" ");
    
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let revStr = "";

        for (let indxStr = element.length-1; indxStr >= 0; indxStr--) {
            revStr += element[indxStr];
        }
        returnStr += revStr + " ";
    }

    return returnStr.trim();
}

console.log(reverseStringParts(str));
