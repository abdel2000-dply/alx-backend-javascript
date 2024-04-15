export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const studentsByCity = students.filter((student) => student.location === city);

  return studentsByCity.map((student) => {
    const gradeobj = newGrades.find((grade) => grade.studentId === student.id);

    const grade = gradeobj ? gradeobj.grade : 'N/A';

    return { ...student, grade };
  });
}
