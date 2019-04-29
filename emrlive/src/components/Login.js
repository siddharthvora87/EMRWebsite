import React, { Component } from "react";
import '../css/PopUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
    flip = e =>{


        fetch('http://localhost:5000/express_backend')
        .then(res => res.json())
        .then((data) => {
          alert(data.express);
        })
        .catch(console.log)
       
        this.props.sendUser('Niranjan');
        this.props.closePopup(this.props.closePopup);

    }

  render() {
    return (
        
        <div className="form-popup" id="myForm">
        <div className="form-container">
          <h1>Login</h1>
      
          <label ><b>UserID</b></label>
          <input  type="text" placeholder="Enter UserID/Email" name="email" required/>
      
          <label ><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
          <span className="forgot">Forgot <a href="#">password?</a></span>
        <br/>
        <br/>
          <button type="submit" className="btn" onClick={this.flip}>Login</button>
          <button type="button" className="btn cancel" onClick={this.props.closePopup}>Cancel</button>   
    </div>
    </div>
    );
  }
}
export default Login;