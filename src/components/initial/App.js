import '../../_styles/global.css';
import React from 'react';

import { nav_items } from '../../data/navbar';
import NavBar from '../global/NavBar';
import Footer from '../global/Footer';


export default function App (props) {
    return (
      <div id="App">
        <NavBar nav_items={nav_items} />
        {props.children}
        {/* <Footer /> */}
      </div>
    );
};
