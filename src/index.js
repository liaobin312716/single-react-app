import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import Detail from './components/detail/detail';
import Index from './components/index/index';

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="detail" component={Detail} />
      <Route path="index" component={Index}>
        <Route path="messages/:id" component={Message} />
      </Route>

    </Route>
  </Router>
), document.body)
