import React from "react";
import EmployeeSidebar from "../EmployeeSidebar";


const Holidays = () => {
  // dummy API for holidays lists...

  const holidays_API = [
    {
      "S.No": 1,
      "Gazetted Holiday": "New Year's Day",
      Date: "2023-01-01",
      "Day of the Week": "Sunday",
    },
    {
      "S.No": 2,
      "Gazetted Holiday": "Republic Day",
      Date: "2023-01-26",
      "Day of the Week": "Thursday",
    },
    {
      "S.No": 3,
      "Gazetted Holiday": "Holi",
      Date: "2023-03-13",
      "Day of the Week": "Monday",
    },
    {
      "S.No": 4,
      "Gazetted Holiday": "Good Friday",
      Date: "2023-04-07",
      "Day of the Week": "Friday",
    },
    {
      "S.No": 5,
      "Gazetted Holiday": "Eid al-Fitr",
      Date: "2023-04-20",
      "Day of the Week": "Thursday",
    },
    {
      "S.No": 6,
      "Gazetted Holiday": "Independence Day",
      Date: "2023-08-15",
      "Day of the Week": "Tuesday",
    },
    {
      "S.No": 7,
      "Gazetted Holiday": "Gandhi Jayanti",
      Date: "2023-10-02",
      "Day of the Week": "Monday",
    },
    {
      "S.No": 8,
      "Gazetted Holiday": "Diwali",
      Date: "2023-10-19",
      "Day of the Week": "Thursday",
    },
    {
      "S.No": 9,
      "Gazetted Holiday": "Christmas Day",
      Date: "2023-12-25",
      "Day of the Week": "Monday",
    },
    {
      "S.No": 10,
      "Gazetted Holiday": "Christmas Day",
      Date: "2023-12-25",
      "Day of the Week": "Monday",
    },
    {
      "S.No": 11,
      "Gazetted Holiday": "Christmas Day",
      Date: "2023-12-25",
      "Day of the Week": "Monday",
    },
    {
      "S.No": 12,
      "Gazetted Holiday": "Christmas Day",
      Date: "2023-12-25",
      "Day of the Week": "Monday",
    },

  ];



  return (
    <div>
      <header>
        <h3>TradiIons</h3>
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
                  <th scope="col">Gazzeted Holidays</th>
                  <th scope="col">Date</th>
                  <th scope="col">Day of Week</th>
                </tr>
              </thead>
              <tbody>
                {holidays_API.map((holiday) => {
                  return (
                    <tr key={holiday["S.No"]}>
                      <td>{holiday["S.No"]}</td>
                      <td>{holiday["Gazetted Holiday"]}</td>
                      <td>{holiday["Date"]}</td>
                      <td>{holiday["Day of the Week"]}</td>
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

export default Holidays;
