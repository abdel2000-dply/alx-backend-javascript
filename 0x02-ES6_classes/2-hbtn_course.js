export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    else throw new TypeError('Name must be a string');

    if (typeof length === 'number') this._length = length;
    else throw new TypeError('Length must be a number');

    if (
      Array.isArray(students)
      && students.every((student) => typeof student === 'string')
    ) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters
  set name(newName) {
    if (typeof newName === 'string') this._name = newName;
    else throw new TypeError('Name must be a string');
  }

  set length(newLength) {
    if (typeof newLength === 'number') this._length = newLength;
    else throw new TypeError('Length must be a number');
  }

  set students(newStudents) {
    if (
      Array.isArray(newStudents)
      && newStudents.every((student) => typeof student === 'string')
    ) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
