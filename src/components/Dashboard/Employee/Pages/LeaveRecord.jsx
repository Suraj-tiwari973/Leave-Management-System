import React from "react";
import "../styles/leaveRecord.css";
import EmployeeSidebar from "../EmployeeSidebar";

const EmployeeDashboard = () => {
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
                  <th scope="col">Leaves Taken</th>
                  <th scope="col">Remaining Leaves</th>
                  <th scope="col">Total Leaves</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>2</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>2</td>
                  <td>12</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
