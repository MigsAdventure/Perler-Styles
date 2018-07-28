import '../../_styles/components/global/NavBar.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import AuthBtns from './AuthBtns';
import { fetchGoogleUserDetails } from '../../actions/loginActions';

class NavBar extends Component {
  constructor() {
    super();
    this.NavToggle = this.NavToggle.bind(this);
    this.getLoginDetails = this.getLoginDetails.bind(this);

    this.state = {
      nav_open: false,
      logged_in: false
    }
  }

  NavToggle() {
    this.setState({
      nav_open: !this.state.nav_open
    });
  }

  getLoginDetails(res) {
      this.props.fetchGoogleUserDetails(res);
      this.setState({
          logged_in: res && true
      });
  }

  render() {
    const { nav_items } = this.props;
    const { nav_open } = this.state;
    const nav_icon = nav_open ?
    <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>;
    const nav_visible = nav_open ?
    'show-nav' : 'hide-nav';

    const renderNavBar = (
      <div className={`NavBar`}>
        <div className={`inner-navbar ${nav_visible}`}>
          <ul className="nav-items">
            {
              // map through all nav items here
              Object.keys(nav_items).map((item, i) => {
                return <li key={i} onClick={this.NavToggle} className={`nav-item nav-${item}`}><Link to={`/${item}`}>{nav_items[item]}</Link></li>
              })
            }
              <AuthBtns onClick={this.NavToggle} loggedIn={this.state.logged_in} getLoginDetailsCB={this.getLoginDetails}/>
          </ul>
        </div>
        <div className="hamburger" onClick={this.NavToggle}>
          {nav_icon}
        </div>
      </div>
    );

    return (
      renderNavBar
    );
  }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchGoogleUserDetails: (res) => {
            dispatch(fetchGoogleUserDetails(res));
        },
    };
};

export default connect(null, mapDispatchToProps)(NavBar)