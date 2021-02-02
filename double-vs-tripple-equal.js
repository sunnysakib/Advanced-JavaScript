/*
// Double Equals (==) 
|Double Equals (==) checks for value equality only. It inherently does type coercion. This means that before checking the values, it converts the types of the variables to match each other.|
//Triple Equals (===)
|Triple Equals (===) does not perform type coercion. It will verify whether the variables being compared have both the same value AND the same type. |
*/

const number = 1234 
const string = '1234'  
console.log(number == string) //true
console.log(number === string)  //false 

console.log(0 == false) //true
console.log(0 === false) //false 