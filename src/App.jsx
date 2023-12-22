import React from 'react';
import Home from './components/home/Home';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import EmployeeLogin from './components/Login/EmployeeLogin.jsx';
import AdminLogin from './components/Login/AdminLogin.jsx';
import Nopage from './components/Nopage/Nopage.jsx';
import LeaveRecord from './components/Dashboard/Employee/Pages/LeaveRecord';
import ApplyLeave from './components/Dashboard/Employee/Pages/ApplyLeave';
import LeaveHistory from './components/Dashboard/Employee/Pages/LeaveHistory';
import Holidays  from './components/Dashboard/Employee/Pages/Holidays';
import PendingApproval from './components/Dashboard/Admin/Pages/PendingApproval';
import EmployeeLeaveCount from './components/Dashboard/Admin/Pages/EmployeeLeaveCount';
import EmployeeLeaveHistory from './components/Dashboard/Admin/Pages/EmployeeLeaveHistory';
import AddEmployee from './components/Dashboard/Admin/Pages/AddEmployee';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/employeeLogin" element={<EmployeeLogin />} />
          <Route path="/leaveRecord" element={<LeaveRecord />} />
          <Route path="/applyLeave" element={<ApplyLeave />} />
          <Route path="/leaveHistory" element={<LeaveHistory />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/pendingApproval" element={<PendingApproval />} />
          <Route path="/empLeaveHistory" element={<EmployeeLeaveHistory />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/*" element={<Nopage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App