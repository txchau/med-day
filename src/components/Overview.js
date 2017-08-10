import React, { Component } from 'react';

class Overview extends Component {
  render() {
    return (
    	<div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-lg-10"> 
				<div className="jumbotron">
					<h1 className="display-3">Welcome!</h1>		  	
				  	<p>To begin, use the button below.</p>
				  	<p className="lead">
				    	<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
				  	</p>		  	
				</div>
			</div>
		  </div>
		</div>		
    );
  }
}

export default Overview;
