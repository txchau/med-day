import React, { Component } from 'react';

import Breadcrumbs from '../components/Breadcrumb.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header/>       
        <Breadcrumbs/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
