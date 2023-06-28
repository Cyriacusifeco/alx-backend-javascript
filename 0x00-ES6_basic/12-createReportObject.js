export default function createReportObject(employeesList) {
  const allEmp = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return allEmp;
}
