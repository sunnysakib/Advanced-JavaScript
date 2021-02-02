/* null
| You can assign null to a variable to denote that currently that variable does not have any value but it will have later on. A null means absence of a value. |
*/

let age = null;
console.log(age);


/* undefined
| Undefined is also a primitive value in JavaScript. A variable or an object has an undefined value when no value is assigned before using it. So you can say that undefined means lack of value or unknown value.|
*/

let Name;
console.log(Name)

function Sum(age1, age2)
{
    var result = age1 + age2;
}

var result = Sum(15, 20);    // no return value.
console.log(result);