import React from 'react';
import {Link} from 'react-router-dom';
import '../Employee/employeeSidebar.css';

const AdminSidebar = () => {
  return (
    <div className='sidebar--container'>
        <div className="side--menu">
            <ul>
                <li><Link to="/pendingApproval">Pending Approvals</Link></li>
                <li><Link to="/empLeaveHistory">Employee Leave History</Link></li>
                <li><Link to="/addEmployee">Add Employee</Link></li>
            </ul>
        </div>
        <div className="logout--btn">
            <button type="button" class="btn btn-danger">Logout</button>
        </div>
    </div>
  )
}

export default AdminSidebar;