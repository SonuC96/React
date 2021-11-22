import React, { Component } from "react";
import EmpTable from "./empTable";

class Home extends Component {
  state = {
    count: 1,
    employee: {
      empId: 11,
      empName: "Anu",
      salary: 25000,
    },
    employees: [
      {
        empId: 12,
        empName: "Manu",
        salary: 35000,
      },
      {
        empId: 13,
        empName: "Sanu",
        salary: 45000,
      },
      {
        empId: 14,
        empName: "Sam",
        salary: 55000,
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <EmpTable
          employees={this.state.employees}
          employee={this.state.employee}
          count={this.state.count}
        />
      </div>
    );
  }
}

export default Home;
