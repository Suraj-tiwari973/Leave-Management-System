import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar";
import "../styles/employeeLeaveHistory.css";

const EmployeeLeaveHistory = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");

  // dummy api for leave history..

  const leaveRecords = [
    {
      name: "John Doe",
      fromDate: "2023-10-01",
      toDate: "2023-10-05",
      numberOfLeaves: 5,
      typeOfLeave: "Paid Leave",
      reason: "Vacation",
    },
    {
      name: "Alice Smith",
      fromDate: "2023-11-15",
      toDate: "2023-11-18",
      numberOfLeaves: 4,
      typeOfLeave: "Sick Leave",
      reason: "Fever",
    },
    {
      name: "Bob Johnson",
      fromDate: "2023-12-20",
      toDate: "2023-12-24",
      numberOfLeaves: 5,
      typeOfLeave: "Unpaid Leave",
      reason: "Personal reasons",
    },
    {
      name: "Ella Williams",
      fromDate: "2023-11-01",
      toDate: "2023-11-05",
      numberOfLeaves: 5,
      typeOfLeave: "Paid Leave",
      reason: "Family vacation",
    },
    {
      name: "Sarah Adams",
      fromDate: "2023-10-15",
      toDate: "2023-10-19",
      numberOfLeaves: 5,
      typeOfLeave: "Paid Leave",
      reason: "Hiking trip",
    },
    {
      name: "Mike Brown",
      fromDate: "2023-09-05",
      toDate: "2023-09-09",
      numberOfLeaves: 5,
      typeOfLeave: "Sick Leave",
      reason: "Flu",
    },
    {
      name: "Emma Davis",
      fromDate: "2023-11-10",
      toDate: "2023-11-14",
      numberOfLeaves: 5,
      typeOfLeave: "Vacation",
      reason: "Beach holiday",
    },
  ];

  // find the data of employee from the API.
  const selectedEmployeeData = leaveRecords.find(
    (record) => record.name === selectedEmployee
  );

  // logic for counting of number of leaves from
  const calculateLeaveDays = (fromDate, toDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const diffDays = Math.round((endDate - startDate) / oneDay);
    return diffDays + 1; // Add 1 to include the start date
  };

  return (
    <div>
      <header>
        <h3>DeepAlgorithms</h3>
      </header>

      <div class="fluid-container main--container">
        <div class="row">
          <div class="col-md-2 left--div">
            <AdminSidebar />
          </div>
          <div class="col-md-10 right--div">
            {/* write the next code here.. */}
            <div className="center--dropdown">
              <select
                className="styled--dropdown"
                value={selectedEmployee}
                onChange={(e) => {
                  setSelectedEmployee(e.target.value);
                }}
              >
                <option value="">Select Employee</option>
                {leaveRecords.map((employeeName, index) => {
                  return (
                    <option key={index} value={employeeName.name}>
                      {employeeName.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="employee--data--table">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="column">Name</th>
                    <th scope="column">Type of leave</th>
                    <th scope="column">From Date</th>
                    <th scope="column">To Date</th>
                    <th scope="column">No. of leaves</th>
                    <th scope="column">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedEmployeeData.name}</td>
                    <td>{selectedEmployeeData.typeOfLeave}</td>
                    <td>{selectedEmployeeData.fromDate}</td>
                    <td>{selectedEmployeeData.toDate}</td>
                    <td>
                      {calculateLeaveDays(
                        selectedEmployeeData.fromDate,
                        selectedEmployeeData.toDate
                      )}
                    </td>
                    <td>{selectedEmployeeData.reason}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLeaveHistory;
