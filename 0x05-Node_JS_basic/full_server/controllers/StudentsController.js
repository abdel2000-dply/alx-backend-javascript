import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    let result = 'This is the list of our students';
    readDatabase(process.argv[2])
      .then((fields) => {
        result += `\nNumber of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}`;
        result += `\nNumber of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}`;
        res.setHeader('Content-Type', 'text/plain');
        res.send(result);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    readDatabase(process.argv[2])
      .then((fields) => {
        if (fields[major]) {
          res.setHeader('Content-Type', 'text/plain');
          res.send(`List: ${fields[major].join(', ')}`);
        } else {
          res.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
