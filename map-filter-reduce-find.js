const numbers = [2, 4, 5, 7, 8, 9];
// const output = [];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

// Map
// function square(element) {
//     return element*element;
// }
// result = number.map(square);
// console.log(result);

// const result = number.map(element => element * element);  // using arrow function.
// console.log(result);

// const cube = numbers.map(x => x*x*x);
// console.log(cube);

// Filter
// const bigger = number.filter(x => x > 5);
// console.log(bigger);

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 },
  ];
  
  const studentGrades = students.filter(s => s.grade >= 90);
  console.log(studentGrades);
