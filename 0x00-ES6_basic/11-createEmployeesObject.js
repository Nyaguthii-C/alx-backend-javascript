// export function, make module
export default function createEmployeesObject(departmentName, employees) {
    // create new object
    let DeptEmployees = {};
    DeptEmployees[departmentName] = employees;

    return DeptEmployees;
}
