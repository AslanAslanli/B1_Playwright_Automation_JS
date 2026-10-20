function wordCounter(str){
    let counter = 0;
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index)>='A' && str.charAt(index)<='Z') {
            counter++;
        }   
    }

    return counter+1;
}

let string = "thisHasManyWordsToFind";
console.log(wordCounter(string));