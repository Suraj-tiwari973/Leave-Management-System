import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar";
import '../styles/pendingApproval.css'

const PendingApproval = () => {
  // dummy api ..

  const leave_records = [
    {
      "S.no": 1,
      Name: "John Doe",
      Department: "HR",
      Date: "2023-10-15",
      Reason: "Finance",
      Status: "Approved",
    },
    {
      "S.no": 2,
      Name: "Alice Smith",
      Department: "Finance",
      Date: "2023-11-05",
      Reason: "Sick Leave",
      Status: "Pending",
    },
    {
      "S.no": 3,
      Name: "Bob Johnson",
      Department: "IT",
      Date: "2023-10-25",
      Reason: "Personal Day",
      Status: "Rejected",
    },
    {
      "S.no": 4,
      Name: "Emily Brown",
      Department: "Marketing",
      Date: "2023-11-10",
      Reason: "Family Emergency",
      Status: "Approved",
    },
    {
      "S.no": 5,
      Name: "David Lee",
      Department: "Sales",
      Date: "2023-11-15",
      Reason: "Vacation",
      Status: "Pending",
    },
    {
      "S.no": 5,
      Name: "David Lee",
      Department: "Sales",
      Date: "2023-11-15",
      Reason: "Vacation",
      Status: "Pending",
    }
  ];

  // status color function ..

  const getStatusColor = (status) => {
    if (status === "Approved") {
      return "green";
    } else if (status === "Pending") {
      return "blue";
    } else {
      return "red";
    }
  };

  // const handleApproveRejectClick = (record, action) => {
  //   // You can implement logic to handle the Approval and Reject actions here.
  //   // For this example, we'll simply update the status in the state.
  //   const updatedLeaveRecords = leave_records.map((item) => {
  //     if (item["S.no"] === record["S.no"] && item["Status"] === "Pending") {
  //       item["Status"] = action;
  //     }
  //     return item;
  //   });

  //   this.setState({ leave_records : updatedLeaveRecords });
  // };


  return (
    <div>
      <header>
        <h3>TradiIons</h3>
      </header>

      <div class="fluid-container main--container">
        <div class="row">
          <div class="col-md-2 left--div">
            <AdminSidebar />
          </div>
          <div class="col-md-10 right--div">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Date</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Status</th>
                  <th scope="col">Approve/Reject</th>
                </tr>
              </thead>
              <tbody>
                {leave_records.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td>{item["Name"]}</td>
                      <td>{item["Department"]}</td>
                      <td>{item["Date"]}</td>
                      <td>
                      <div className="reason-cell">{item["Reason"]}</div>
                      </td>
                      <td
                        style={{
                          color: getStatusColor(item["Status"]),
                          fontWeight:700
                        }}
                      >
                        {item["Status"]}
                      </td>
                      <td>
                        {item["Status"] === "Pending" && (
                          <div className="approve--reject--btn">
                            <button
                            className="btn btn-success approve--btn"
                              // onClick={() =>
                              //   handleApproveRejectClick(item, "Approved")
                              // }
                            >
                              Approve
                            </button>
                            <button
                            className="btn btn-danger reject--btn"
                              // onClick={() =>
                              //   handleApproveRejectClick(item, "Rejected")
                              // }
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </td>
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

export default PendingApproval;
