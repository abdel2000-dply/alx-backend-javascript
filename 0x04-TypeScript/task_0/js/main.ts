// Write your code in the main.ts file:

// Write an interface named Student that accepts the following elements:
// firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
// Requirements:

// When running, Webpack should return No type errors found.
// Every variable should use TypeScript when possible.

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Yasir',
  lastName: 'Bousri',
  age: 25,
  location: 'Morocco'
};

const student2: Student = {
  firstName: 'lara',
  lastName: 'Croft',
  age: 30,
  location: 'USA'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstName = document.createElement('td');
  firstName.textContent = student.firstName;
  const location = document.createElement('td');
  location.textContent = student.location;
  row.appendChild(firstName);
  row.appendChild(location);
  table.appendChild(row);
});
