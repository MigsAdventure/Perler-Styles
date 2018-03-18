import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';



export default function AuthBtns(props) {

  const googleResponse = (response) => {
    console.log(response);
  }

  const { loggedIn } = props;

  let btn_state = 'logout';
  const googleLogOutBtn = (
    <GoogleLogout
      buttonText="Log Out"
      onLogoutSuccess={googleResponse}
      >
      </GoogleLogout>);

      const googleLogInBtn = (
        <GoogleLogin
          clientId="377979995790-d9gac7mmvbaii11sdph9fkkptnrmqcmn.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={googleResponse}
          onFailure={googleResponse}
          isSignedIn={true}
        />);

        let renderBtn = googleLogInBtn;

        if (loggedIn) {
          btn_state = "login";
          renderBtn = googleLogOutBtn;
        }
console.log(loggedIn);
        return (
          <li className={`nav-item nav-${btn_state}`}>
            {renderBtn}
          </li>
        );

      }
