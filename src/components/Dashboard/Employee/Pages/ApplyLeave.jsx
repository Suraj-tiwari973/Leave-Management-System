import React, { useState } from "react";
import "../styles/applyLeave.css";
import EmployeeSidebar from "../EmployeeSidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ApplyLeave = () => {
  // Date range picker..
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [name, setName] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);   // selected file..

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

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
            <div className="leave--form">
              <h3 style={{ textAlign: "center" }}>Apply for leave here</h3>
              <form action="#">
                <label htmlFor="name">Your name*</label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="date--picker">
                  <div>
                    <label>Start Date:</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      required
                    />
                  </div>
                  <div>
                    <label>End Date:</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      required
                    />
                  </div>
                </div>

                <label htmlFor="reason">Reason*</label>
                <textarea
                  name="reason"
                  rows="7"
                  placeholder="Type your Reason"
                  required
                ></textarea>

                <div>
                  <label htmlFor="">Supportive Document*</label>
                    <input
                    type="file"
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange}
                    className="custom-file-upload"
                    required
                    />
                </div>
                <div className="submit--btn">
                  <button type="button" class="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
