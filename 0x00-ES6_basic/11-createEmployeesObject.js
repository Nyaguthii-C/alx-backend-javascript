export default function createEmployeesObject(departmentName, employees) {
    let DeptEmployees = {};
    DeptEmployees[departmentName] = employees;

    return DeptEmployees;
}
