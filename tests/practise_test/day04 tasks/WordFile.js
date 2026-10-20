let fullName = "AslAN asLANli";
let fullNameArray = fullName.trim().split(" ");
let optionSelection = "3";

if (optionSelection === "1") {
  console.log(fullName.toUpperCase());
} else if (optionSelection === "2") {
    console.log(fullName.toLowerCase());
} else if (optionSelection === "3") {
    console.log(
      fullNameArray[0].charAt(0).toUpperCase() +
        fullNameArray[0].substring(1).toLowerCase() + " " +
        fullNameArray[1].charAt(0).toUpperCase() +
        fullNameArray[1].substring(1).toLowerCase()
    );
} else {
    console.log("Wrong option selection");
}
