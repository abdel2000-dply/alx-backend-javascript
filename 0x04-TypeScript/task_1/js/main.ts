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

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
};

console.log(director1);
