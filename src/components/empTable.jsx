import React from 'react';
const EmpTable = (props) => {
    return ( <div>
        <h1>{props.count}</h1>
        <table class="table table-dark table-striped w-50 mx-auto">
                <thead>
                    <tr >
                        <th>Emp Id</th>
                        <th>Emp Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.employee.empId}</td>
                        <td>{props.employee.empName}</td>
                        <td>{props.employee.salary}</td>
                    </tr>
                </tbody>
            </table>
         <table class="table table-success table-striped w-50 mx-auto">
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Emp Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((emp) =>(
                    <tr >
                        <td>{emp.empId}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.salary}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
    </div> );
}
 
export default EmpTable;