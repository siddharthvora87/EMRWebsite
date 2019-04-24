import React, { Component } from "react";
import ReactModalLogin from "react-modal-login";
 
const googleConfig= {
    client_id: '152445795674-kjbieh8e4g36fmbske5ksfll53g7blu5.apps.googleusercontent.com',
    scope: "https://www.googleapis.com/auth/plus.login"
  };
 
class Login extends React.Component {
  constructor(props) {
    super(props);
 
     this.state = {
      showModal: this.props.DisplayDialog ,
      loading: false,
      error: null
    };
    console.log('inside Login');
    console.log(this.props.DisplayDialog);

  }
 
  openModal() {
    this.setState({
      showModal: !this.state.showModal && this.props.DisplayDialog
    });
    
  }
 
  closeModal() {
    this.setState({
      showModal: !this.state.showModal && this.props.DisplayDialog,
      error: null
    });
  }
 
  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
  }
 
  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }
 
  startLoading() {
    this.setState({
      loading: true
    });
  }
 
  finishLoading() {
    this.setState({
      loading: false
    });
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }
 
  render() {
    return (
      <div>
       
       {/*{<button onClick={() => this.openModal()}>Open Modal</button> }*/}
 
        <ReactModalLogin
          
          visible={this.props.DisplayDialog} 
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          providers={{
        
            google: {
              config: googleConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Google"
            }
          }}
        />
      </div>
    );
  }
}
export default Login;