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

const teacher3: Teacher = new TeacherClass('John', 'Doe', false, 'London');
teacher3.contract = false;

console.log(teacher3);
