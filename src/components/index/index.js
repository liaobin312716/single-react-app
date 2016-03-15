import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Index extends Component {
    render() {
        return (
            <div>
                <h2>我是首页</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>

        );
    }
}
