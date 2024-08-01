// this file includes a simple if for finding a word in another string var

const myString = "#zan_zendegi_azadi";
const target = "azadi";

// this is a simple if() i used includes mrthod for this !!!

if (myString.includes(target) == true) {
  console.log(`${target} is inside myString!`);
} else {
  console.log(`${target} is not inside myString!`);
}
