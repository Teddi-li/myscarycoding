
import "../App.css"
function Register() {

    return (
    <div className="logintable">
        <h1>Register</h1>
        <div className="login-form">
          
            <div className="input-wrapper">
              <label className="usernamelabel">Username</label>
              <input className="usernamebox" type="text" />
            </div>
            <div className="input-wrapper">
              <label className="passwordlabel">Password</label>
              <input className="passwordbox" type="password"/>
            </div>
             <div className="input-wrapper">
              <label className="passwordlabel">Password</label>
              <input className="passwordbox" type="password"  />
            </div>
            <br />
            
            <div className="register">
              <button className="register1" id="btn" >Submit</button>
              <button className="register2" id="btn" >cancel</button>
            </div>
      </div>
      </div>
  );
}

export default Register;
