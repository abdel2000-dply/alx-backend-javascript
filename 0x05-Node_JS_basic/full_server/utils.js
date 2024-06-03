import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.split('\n').filter((line) => line);
      const students = lines.slice(1).map((line) => line.split(','));

      const fields = {};
      students.forEach((student) => {
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
      });

      resolve(fields);
    });
  });
}
// the object returned should look like this:
// {
//   CS: [ 'Johann', 'Arielle', 'Jonathan', 'Emmanuel', 'Guillaume', 'Katie' ],
//   SWE: [ 'Guillaume', 'Joseph', 'Paul', 'Tommy' ]
// }

export default readDatabase;
