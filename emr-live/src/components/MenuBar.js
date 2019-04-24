import React, { Component } from "react";
import '../css/App.css';
import ReactModalLogin from "react-modal-login";
import Login from "./Login.js"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuBar extends Component {
  constructor(props) {
        super(props);
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
                    dialog:null
                     };
  }
  flipModel = e =>{
    this.setState({
      showModel: !this.state.showModel
    });
    console.log(this.state.showModel);

    
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
        break;
        case 'Services':
        this.setState({
          mnuSrvs:'select',
        });
        break;
        case 'Team':
        this.setState({
          mnuTeam:'select',
        });
        break;
        case 'Providers':
        this.setState({
          mnuProv:'select',
        });
        break;
        case 'Appointment':
        this.setState({
          mnuAppt:'select',
        });
        break;
        case 'Reports':
        this.setState({
          mnuRepo:'select',
        });
        break;   
        case 'Gallery':
        this.setState({
          mnuGall:'select',
        });
        break;  
        case 'Contact':
        this.setState({
          mnuCont:'select',
        });
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
              <FontAwesomeIcon id="fb" icon={['fab', 'facebook']} size="xs" />
          </a>
        
          <a className="brandIcon" href="https://www.instagram.com/explore/locations/225289335/" target="_blank" >
              <FontAwesomeIcon id="ingrm" icon={['fab', 'instagram']} size="xs" />
          </a>
          <a className="brandIcon" href="https://www.pinterest.com/pin/378795018656419968/" target="_blank" >
              <FontAwesomeIcon id="pint" icon={['fab', 'pinterest']} size="xs" />
          </a>
          
          <p className="label" >Phone</p> 
          
          <p className="label" id="phoneno">+353 1234 5678 </p>

          <a className="sign-end" onClick={this.flipModel}>Sign in</a>
          <p className="sign-sep" >|</p>
          <a className="sign" onClick={this.flipModel}>Sign Up</a>
      
      </div>

      <br/> Hello
      <div>
      
        <Login DisplayDialog={this.state.showModel} />
      </div>
      <br/>
      {/* Top header ehd */}

        <div className="navbar-left">
          <div className="burger">
          <div id="burgerbtn" className={burgerToggle} onClick = {this.flipBurger} >
              <span></span>
              <span></span>
              <span></span>
          </div>
          </div>
        </div>
        <div className="brand">Hospital X</div>
        <div className="navbar-right">
          <div className="mnubar">
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuHome}>Home</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuSrvs}>Services</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuTeam}>Team</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuProv}>Providers</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuAppt}>Appointment</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuRepo}>Reports</span></div>
            <div id="mnuitem"  onClick={this.flipMenu}><span className={this.state.mnuCont}>Contact</span></div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default MenuBar;
