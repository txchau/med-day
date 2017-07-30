import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/widgets'} className="nav-link" activeClassName="active"><i className="icon-calculator"></i> Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/charts'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> Patients</NavLink>
            </li>
            <li className="divider"></li>
            <li className="nav-title">
              Extras
            </li>
            <li className="nav-item">
              <NavLink to={'/login'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Admin</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
