import React from 'react';
import {Link} from 'react-router-dom';
import './employeeSidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar--container'>
        <div className="side--menu">
            <ul>
                <li><Link to="/leaveRecord">Leave Record</Link></li>
                <li><Link to="/applyLeave">Apply for leave</Link></li>
                <li><Link to="/leaveHistory">Leave History</Link></li>
                <li><Link to="/holidays">Holidays</Link></li>
            </ul>
        </div>
        <div className="logout--btn">
            <button type="button" class="btn btn-danger">Logout</button>
        </div>
    </div>
  )
}

export default Sidebar;