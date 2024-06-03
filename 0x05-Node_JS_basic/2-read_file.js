// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const lines = data.split('\n').filter((line) => line);
  console.log(`Number of students: ${lines.length - 1}`);
  const students = lines.slice(1).map((line) => line.split(','));

  const fields = {};
  for (const student of students) {
    const field = student[3];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(student[0]);
  }

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(`Number of students in ${field}:${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
