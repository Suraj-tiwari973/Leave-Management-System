import {useState} from "react";
import './common.css';
import { Link,useNavigate } from "react-router-dom";
import M from "materialize-css";



const EmployeeLogin = ()=> {

  const preEmail = "abc@gmail.com";  // static email and password.
  const prePassword = '123456';

  const navigate  = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(email === preEmail && password === prePassword){
      console.log(email,password);
      M.toast({html:"Login Successfuly",classes:"#2e7d32 green darken-3"});
      navigate('/leaveRecord'); // get navigated to employee dashboard after successful login.
      
    }
    else{
      M.toast({html:"Invalid Username or Password",classes:"#d32f2f red darken-2"});
      console.log("Invalid Username or Password");
    }

    // Clear form fields after the submission.
    setEmail("");
    setPassword("");
  };

  return (
    <>
    <header>
        <h3 style={{marginLeft:"10px",}}>TradiIons</h3>
    </header>
      <div className="root">
        <div className="details"></div>

        <div className="form">
          <div className="contact-container">
            <h2>Employee Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                  id="password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                />
              </div>
              <button type="submit">Submit</button>
              <Link to="#"><p className="forget--password"><u>Forget Password ?</u></p></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default EmployeeLogin;