const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        let content = data.toString().split('\n');
        let students = content.filter((item) => item);
        students.shift();
        const numOfStudents = students.length;
        let csStudents = students.filter((item) => item.includes('CS')).length;
        let sweStudents = students.filter((item) => item.includes('SWE')).length;
        resolve(`Number of students: ${numOfStudents}\nNumber of students in CS: ${csStudents}\nNumber of students in SWE: ${sweStudents}`);
      }
    });
  });
}

const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url ==='/students') {
    countStudents(process.argv[2]).then((data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(`This is the list of our students\n${data}`)
    }).catch((error) => {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end();
  }
});

app.listen(port);

module.exports = app;
