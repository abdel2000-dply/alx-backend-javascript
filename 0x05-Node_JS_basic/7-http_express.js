const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 1245;
const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const result = [];
      const lines = data.split('\n').filter((line) => line);
      result.push(`Number of students: ${lines.length - 1}`);
      const students = lines.slice(1).map((line) => line.split(','));

      const fields = {};
      students.forEach((student) => {
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
      });

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          result.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }

      resolve(result.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((data) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${data}`);
  }).catch((error) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${error.message}`);
  });
});

app.listen(port);

module.exports = app;
