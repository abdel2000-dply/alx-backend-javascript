interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class TeacherClass implements Teacher {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    public fullTimeEmployee: boolean,
    public location: string,
    public yearsOfExperience?: number
  ) {}
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Write a Class named StudentClass:

// The constructor accepts firstName(string) and lastName(string) arguments
// The class has a method named workOnHomework that return the string Currently working
// The class has a method named displayName. It returns the firstName of the student
// The constructor of the class should be described through an Interface
// The class should be described through an Interface
// Requirements:

// You can reuse the Webpack configuration from the previous exercise to compile the code.
// When running npm run build, no TypeScript error should be displayed.
// Every variable should use TypeScript when possible.

interface Student {
  firstName: string;
  lastName: string;
}

class StudentClass implements Student {
  constructor(readonly firstName: string, readonly lastName: string) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const student1 = new StudentClass('Alice', 'Smith');

console.log(student1.workOnHomework()); // working
console.log(student1.displayName()); // working!
