import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const studentsByCity = getStudentsByLocation(students, city);

  return studentsByCity.map((student) => {
    const gradeobj = newGrades.find((grade) => grade.studentId === student.id);

    const grade = gradeobj ? gradeobj.grade : 'N/A';

    return { ...student, grade };
  });
}
