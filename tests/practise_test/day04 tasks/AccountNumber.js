let accountNumber2 = "1234567"
let accountNumber5 = "5234567899";

if (accountNumber2.startsWith("2")) {
    console.log("Valid 7 digit account number");
} else {
    console.log("Invalid 7-digit account number");
}

let str = "aslan yaxsi oglandiaslan";
let str2 = str.replaceAll("aslan", "");
console.log(str2);

let str3;

if (str3 == undefined) {
    console.log("No address found");
}

let str4 = "231332 Leaf ave, lake city 3132";
console.log(str4.toUpperCase());

let badWord = "sdfsfsdfsidio sfdsfs sfsdf";
if (badWord.includes("idiot") || badWord.includes("dumb") || badWord.includes("heck")) {
    console.log("Message not sent");
} else {
    console.log("Message sent");
}

let name = "aslan"
if (name.startsWith("a") || name.startsWith("z")) {
    console.log("Your name is cool");
} else if(name.endsWith("m")){
    console.log("Almost cool");
} else {
    console.log("Sorry not a cool name");
}