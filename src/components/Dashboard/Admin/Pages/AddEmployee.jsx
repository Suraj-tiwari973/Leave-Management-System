import React,{useState} from "react";
import AdminSidebar from '../AdminSidebar';
import '../styles/addEmployee.css';

const AddEmployee = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <div>
      <header>
        <h3>DeepAlgorithms</h3>
      </header>

      <div className="fluid-container main--container">
        <div className="row">
          <div className="col-md-2 left--div">
            <AdminSidebar />
          </div>
          <div className="col-md-10 right--div">
            <div className="add--employee">
              <h3 style={{textAlign:"center"}}>Add New Employee</h3>
              <form action="#" className='add--employee--form'>
              <label htmlFor="email">Email*</label>
                <input 
                type="email" 
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />

              <label htmlFor="password">Password*</label>
                <input 
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />

                <div className="create--btn">
                  <button type="button" class="btn btn-success">
                    Add Employee
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

export default AddEmployee;
