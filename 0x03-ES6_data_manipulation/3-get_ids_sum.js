export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;

  return students.reduce((acc, student) => acc + student.id, 0);
  /*
    The reduce function will perform the following operations:
      acc = 0, student.id = 1 -> acc = 0 + 1 = 1
      acc = 1, student.id = 2 -> acc = 1 + 2 = 3
      acc = 3, student.id = 3 -> acc = 3 + 3 = 6
  */
}
