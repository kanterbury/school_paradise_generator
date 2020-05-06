import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import './App.css';
import SmartPhoneContents from './contents/SmartPhoneContents';
import PCContents from './contents/PCContents';

// Appコンポーネント
class App extends Component {

  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <MediaQuery maxWidth={767}>
          <SmartPhoneContents />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <PCContents />
        </MediaQuery>
      </div>
    );
  }
}


export default connect()(App);