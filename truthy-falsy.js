/* A falsy value is something which evaluates to FALSE, for instance when checking a variable.

falsy value 
  // null
  // NaN 
  // 0
  // '' (empty string)
  // false
  // undefine

truthy value  
let emptyArray = []; 
let emptyObject = {};

*/

let Name = null;
if (Name) {
    console.log('condition is true');
} 
else {
    console.log('condition is false');
}


let hight;
if (hight) {
    console.log('hight is define');
} else {
    console.log('hight is undefine');
}