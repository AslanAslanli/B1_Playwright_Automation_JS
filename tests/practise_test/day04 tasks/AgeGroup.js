let age = 33;

if (age <= 0 || age > 150) {
  console.log("invalid entry");
} else if (age <= 2) {
  console.log("infant");
} else if (age >= 3 && age <= 5) {
  console.log("toddler");
} else if (age >= 6 && age <= 9) {
  console.log("kid");
} else if (age >= 10 && age <= 12) {
  console.log("pre teen");
} else if (age >= 13 && age <= 17) {
  console.log("teenager");
} else if (age >= 18 && age <= 20) {
  console.log("young adult");
} else if (age >= 21 && age <= 35) {
  console.log("adult");
} else if (age >= 36 && age <= 55) {
  console.log("middle aged adult");
} else if (age >= 55 && age <= 149) {
  console.log("senior citizen");
}