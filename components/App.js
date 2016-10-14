import React, { Component } from 'react';
import Header from './Header';
import './App.scss';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container"><Header />{ children }
      </div>
    );
  }
}       
