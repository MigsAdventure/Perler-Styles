import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';



export default function AuthBtns(props) {
  let btn_state = 'login';

  const googleResponse = (response) => {
      props.getLoginDetailsCB(response);
  };


  const { loggedIn } = props;
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
          btn_state = "log-out";
          renderBtn = googleLogOutBtn;
        }
console.log(loggedIn);
        return (
          <li className={`nav-item nav-${btn_state}`}>
            {renderBtn}
          </li>
        );

      }
