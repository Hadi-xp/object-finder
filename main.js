// this file includes a simple if for finding a word in another string var im using promt method to get input from User

const myString = "#zan_zendegi_azadi";
const target = prompt('what are you looking for ?')

// this is a simple if() and  i used includes mrthod for this !!!

if (myString.includes(target) == true) {
  alert(`${target} is inside myString!`);
} else {
  alert(`${target} is not inside myString!`);
}


// as you can see if my condition be true it will Alert the first statment and if it wont the second statment shows up!!