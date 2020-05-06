import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './generator/Header';
import Input from './generator/Input';
import SeatOrder from './generator/SeatOrder';
import Download from './generator/Download';
import Footer from './generator/Footer';

// Appコンポーネント
class App extends Component {

  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <SeatOrder />
        <Download />
        <Footer />
      </div>
    );
  }
}


export default connect()(App);