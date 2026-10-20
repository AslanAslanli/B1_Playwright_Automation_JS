let words =
  "knife, plates, cups, forks, pan, pot, trash can, fridge, dish washer";
let wordArr = words.split(", ");

wordArr.forEach((element) => {
  if (element.includes(" ")) console.log(element);
});
