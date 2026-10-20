let message = "   koko quit moko jumbo ";

let badPhrases = ["java is bad", "quit", "have fun", "crying"];

for (let eachBadPhrase of badPhrases) {
    if (message.includes(eachBadPhrase)) {
        console.log("message failed to send");
        return;
    }
}

console.log(message.trim());

