import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleMobile = this.toggleMobile.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpenMobile: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleMobile() {
    this.setState({
      dropdownOpenMobile: !this.state.dropdownOpenMobile
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleMobile} aria-expanded={this.state.dropdownOpenMobile}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Med Day</a>
          </div>
           <div className={this.state.dropdownOpenMobile ? 'collapse navbar-collapse in' : 'collapse navbar-collapse'}>
              <div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#patients">Patients</a></li>                  
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className={this.state.dropdownOpen ? 'dropdown open' : 'dropdown'}>
                    <a href="#" onClick={this.toggle} className="dropdown-toggle" data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
                      <i className="fa fa-user-circle-o fa-2" aria-hidden="true"></i> admin <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#projects"><i className="fa fa-user"></i> Profile</a></li>                
                      <li><a href="#projects"><i className="fa fa-lock"></i> Logout</a></li>                    
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </nav>
    );
  }
}

export default Header;
