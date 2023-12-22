import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import './common.css';

const AdminLogin = ()=> {

  const preEmail = 'abc@gmail.com';  // static email and password..
  const prePassword = '1234';

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(preEmail === email && prePassword === password){
      console.log(email,password);
      navigate('/pendingApproval');
    }
    else{
      console.log('Email or password is wrong');
    }


    // Clear form fields

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
            <h2>Admin Login</h2>
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


export default AdminLogin;