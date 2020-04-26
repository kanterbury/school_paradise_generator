import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './generator/Header';
import Input from './generator/Input';
import SeatOrder from './generator/SeatOrder';

// Appコンポーネント
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <SeatOrder />
      </div>
    );
  }
}


export default connect()(App);