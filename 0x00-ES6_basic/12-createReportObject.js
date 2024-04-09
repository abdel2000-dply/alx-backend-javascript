export default function createReportObject(employeesList) {
  return {
    employees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
