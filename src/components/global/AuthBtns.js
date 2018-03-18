import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';



export default class AuthBtns extends Component {
  constructor() {
    super();
    this.googleResponse = this.googleResponse.bind(this);
    this.state = {
      loggedIn: false
    }
  }

  googleResponse = (response) => {
    console.log(response);
  }

  render() {
    const { loggedIn } = this.state;
    const googleLogOutBtn = (
      <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={this.googleResponse}
        >
        </GoogleLogout>);
        const googleLogInBtn = (
          <GoogleLogin
            clientId="377979995790-d9gac7mmvbaii11sdph9fkkptnrmqcmn.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.googleResponse}
          />);

          let renderBtn = googleLogOutBtn;

          if (!loggedIn) {
            renderBtn = googleLogInBtn;
          }

          return (renderBtn);
        }
      }
