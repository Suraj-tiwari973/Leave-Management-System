import React from "react";
import EmployeeSidebar from "../EmployeeSidebar";

const LeaveHistory = () => {
  // duppy api for leave history...

  const leaveHistoryAPI = [
    {
      "S.No": 1,
      "Employee Name": "John Doe",
      "Start Date": "2023-01-10",
      "End Date": "2023-01-15",
      Reason: "Vacation leave for a family trip",
    },
    {
      "S.No": 2,
      "Employee Name": "Alice Smith",
      "Start Date": "2023-02-20",
      "End Date": "2023-02-25",
      Reason: "Sick leave due to flu",
    },
    {
      "S.No": 3,
      "Employee Name": "Bob Johnson",
      "Start Date": "2023-03-05",
      "End Date": "2023-03-09",
      Reason: "Business travel to a client's site",
    },
    {
      "S.No": 4,
      "Employee Name": "Emily Davis",
      "Start Date": "2023-04-15",
      "End Date": "2023-04-18",
      Reason: "Personal time off",
    },
    {
      "S.No": 5,
      "Employee Name": "Michael Wilson",
      "Start Date": "2023-05-10",
      "End Date": "2023-05-15",
      Reason: "Maternity leave",
    },
    {
      "S.No": 4,
      "Employee Name": "Emily Davis",
      "Start Date": "2023-04-15",
      "End Date": "2023-04-18",
      Reason: "Personal time off",
    },
    {
      "S.No": 5,
      "Employee Name": "Michael Wilson",
      "Start Date": "2023-05-10",
      "End Date": "2023-05-15",
      Reason: "Maternity leave",
    },
        {
      "S.No": 4,
      "Employee Name": "Emily Davis",
      "Start Date": "2023-04-15",
      "End Date": "2023-04-18",
      Reason: "Personal time off",
    },
    {
      "S.No": 5,
      "Employee Name": "Michael Wilson",
      "Start Date": "2023-05-10",
      "End Date": "2023-05-15",
      Reason: "Maternity leave",
    },
  ];

  return (
    <div>
      <header>
        <h3>DeepAlgorithms</h3>
      </header>

      <div class="fluid-container main--container">
        <div class="row">
          <div class="col-md-2 left--div">
            <EmployeeSidebar />
          </div>
          <div class="col-md-10 right--div">
            <div className="username--text">
              <h4>Hello Username</h4>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Reason</th>
                </tr>
              </thead>
              <tbody>
                {leaveHistoryAPI.map((item) => {
                  return (
                    <tr key={item["S.No"]}>
                      <td>{item["S.No"]}</td>
                      <td>{item["Employee Name"]}</td>
                      <td>{item["Start Date"]}</td>
                      <td>{item["End Date"]}</td>
                      <td>{item["Reason"]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;
