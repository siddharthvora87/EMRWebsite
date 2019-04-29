import React, { Component } from "react";
import '../css/HomePage.css';
import home_img from '../images/home_img.jpeg';
import img_services from '../images/img_services.png';


class HomePage extends Component {
  constructor(props) {
        super(props);     
  }
  render() {

    return (
      <div className="clearfix">
   
          <div className="left-pane"> 
            <div className="body-line1"><p className="hp-text1">Welcome to</p><p className="hp-text1a"> Hospital</p><p className="hp-green">X</p></div>
        
            <p className="hp-text3">Our team of doctors join us to provide you the best of
            modern healthcare to ensure you stay healthy,always.</p>

          </div>
          <div className="right-pane"> 
          <img src={home_img} alt=""></img>
          </div>
    
        <div className="bottom-pane">
          <div className="left-pane1"> 
          <div>
                <p className="bot-text1">Our Contacts</p>
                <p className="bot-text2">No.20, XXXXX Street</p><br/>
                <p className="bot-text2">Dublin X.</p><br/>
                <p className="bot-text2">Phone: +353-12345678 </p>
                <p className="bot-text2">http://51.141.110.191:3000/</p>
                

          </div>
          </div>
          <div className="right-pane1"> 
          <div>
                <p className="bot-text1a">MaKE An Appointment Online</p>
          </div>
          </div>
          <div className="right-pane2"> 
          <div>
          <img src={img_services} alt=""></img>
          </div>
          </div>  
        </div>
     </div>   
        
      
    );
  
  }
}
export default HomePage;

