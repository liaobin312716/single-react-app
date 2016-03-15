import React from 'react';
import { Link } from 'react-router';


const App = React.createClass({
  render() {
    return (
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="/detail">Detail</Link></li>
            <li><Link to="/index">Index</Link></li>
          </ul>
          {this.props.children}
        </div>
    )
  }
})

export default App;
