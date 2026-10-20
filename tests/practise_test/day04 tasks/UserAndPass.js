let username = "username";
let password = "pasusernamed";

if (password.length < 5) {
  console.log("Password cant be less than 5 chars");
} else if (password.includes(username)) {
  console.log("Password cant have username in it");
} else {
  console.log("Valid password");
}
