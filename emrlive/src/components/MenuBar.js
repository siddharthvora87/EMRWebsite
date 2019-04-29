import React, { Component } from "react";
import '../css/App.css';
import logo_png from '../images/HospitalX.png';
import location_png from '../images/location.png';
import opnehours_png from '../images/OpenHours.png';
import HomePage from "./HomePage";
import Login from "./Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class MenuBar extends Component {
  constructor(props) {
        super(props);
        this.tclass = "title-bar";
        this.body=HomePage;
        this.state={isToggleOn:false,
                    mnuHome:'select',
                    mnuSrvs:'none',
                    mnuTeam:'none',
                    mnuProv:'none',
                    mnuAppt:'none',
                    mnuRepo:'none',
                    mnuCont:'none',
                    mnuGall:'none',
                    showModel:false,
                    showPopup: false,
                    user:'',
                    view:'Log In',
                    dialog:null
                     };
  }
  getUser(usr){
    this.setState({user:usr});
    this.setState( {view:'Log Out'});
  }

  flipModel = e =>{
    if (this.state.view == 'Log In'){
    this.setState({
      showPopup: !this.state.showPopup
    });
    }else{
      this.setState({user:""});
      this.setState({view:"Log In"});
    }
  }

    
  flipBurger = e =>{
      this.setState({
        isToggleOn : !this.state.isToggleOn});
  }
  flipMenu = e =>{
      const item = e.currentTarget.textContent;
      this.setState({
        mnuHome:'none',
        mnuSrvs:'none',
        mnuTeam:'none',
        mnuProv:'none',
        mnuAppt:'none',
        mnuRepo:'none',
        mnuCont:'none',
        mnuGall:'none'
      });

      switch (item) {
        case 'Home':
        this.setState({
          mnuHome:'select',
        });
        this.tclass="title-bar";
        this.body=HomePage;
        
        break;
        case 'Services':
        this.setState({
          mnuSrvs:'select',
        });
        this.tclass="title-bar-hide";
        break;
        case 'Team':
        this.setState({
          mnuTeam:'select',
        });
        this.tclass="title-bar-hide";
        break;
        case 'Providers':
        this.setState({
          mnuProv:'select',
        });
        this.tclass="title-bar-hide";
        break;
        case 'Appointment':
        this.setState({
          mnuAppt:'select',
        });
        this.tclass="title-bar-hide";
        break;
        case 'Reports':
        this.setState({
          mnuRepo:'select',
        });
        this.tclass="title-bar-hide";
        break;   
        case 'Gallery':
        this.setState({
          mnuGall:'select',
        });
        this.tclass="title-bar-hide";
        break;  
        case 'Contact':
        this.setState({
          mnuCont:'select',
        });
        this.tclass="title-bar-hide";

        break;     
        default:
      }
  }
  render() {
    const burgerToggle = this.state.isToggleOn ? "active" : "close";
    return (
      <div>
      <div className="container">
      {/*Top header start*/}
      <div className="top-bar">
   
          <a className="brandIcon" href="https://www.facebook.com/DublinBusinessSchool/" target="_blank" >
              <FontAwesomeIcon id="fb" icon={['fab', 'facebook']} size="1x" />
          </a>
        
          <a className="brandIcon" href="https://www.instagram.com/explore/locations/225289335/" target="_blank" >
              <FontAwesomeIcon id="ingrm" icon={['fab', 'instagram']} size="1x" />
          </a>
          <a className="brandIcon" href="https://www.pinterest.com/pin/378795018656419968/" target="_blank" >
              <FontAwesomeIcon id="pint" icon={['fab', 'pinterest']} size="1x" />
          </a>
          
          <p className="label" >Phone</p> 
          
          <p className="label" id="phoneno">+353 1234 5678 </p>
          <div className="username"><p className="label" id="user">{this.state.user} </p> </div>
          <a className="sign-in" onClick={this.flipModel}>{this.state.view}</a>
          {/*<p className="sign-sep" >|</p>
          <a className="sign-up" onClick={this.flipModel}>Sign Up</a>*/}
      
      </div>
  
      <div className={this.tclass}>
           <div className="loc-1">
           <p className="title-txt"> Location </p><p className="title-sub"> Find us here </p>
           <a href="https://www.pinterest.com/pin/378795018656419968/" target="_blank"><img  src={location_png} ></img>
          </a>
          </div>
          <div className="loc-2">
           <div className="loc-2a"><a href="https://www.pinterest.com/pin/378795018656419968/" target="_blank"><img  src={logo_png} ></img></a></div>
           <div className="loc-2b"><p className="title-txt1"> HospitalX </p><p className="title-sub1"> Your health is our priority</p></div>
          </div>
          <div className="loc-3">
           <div className="loc-3a"><p className="title-txt3"> Opening Hours </p><p className="title-sub3"> Mon - Fri : 9.00 to 17:00 sat :9:30 to 17:30</p></div>
           <div className="loc-3b"><a href="https://www.pinterest.com/pin/378795018656419968/" target="_blank"><img  src={opnehours_png} ></img></a></div>

          </div>

      </div>
           
 
      {/* Top header ehd */}
        <div className="nav-wrap">
          <div className="navbar-left">
            <div className="burger">
            {/*<div id="burgerbtn" className={burgerToggle} onClick = {this.flipBurger} >
                <span></span>
                <span></span>
                <span></span>
              </div>*/}
            </div>
          </div>
        <div className="brand"><p>Hospital X</p></div>
        <div className="navbar-right">
          <div className="mnubar">
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuHome}><p>Home</p></span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuSrvs}><p>Services</p></span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuTeam}><p>Team</p></span></div>
          {/*  <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuProv}><p>Providers</p></span></div> */}
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuAppt}><p>Appointment</p></span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuRepo}><p>Reports</p></span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuCont}><p>Contact</p></span></div>
          </div>
        </div>
      </div>
      </div>
          <div id="body-ctr">
             <this.body />
          </div>
      
      {this.state.showPopup ? 
        <Login
          text='Close Me'
          closePopup={this.flipModel.bind(this)}
          sendUser={this.getUser.bind(this)}
        />
        : null
      }
      </div>
    );
  }
}
export default MenuBar;

