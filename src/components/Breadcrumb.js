import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}

export default Breadcrumbs;
