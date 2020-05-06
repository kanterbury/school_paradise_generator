import React, { Component } from 'react';
import Header from '../generator/Header';
import Input from '../generator/Input';
import SeatOrder from '../generator/SeatOrder';
import Download from '../generator/Download';
import Footer from '../generator/Footer';

class PCContents extends Component{
  render(){
    return(
      <div>
        <Header />
        <Input />
        <SeatOrder />
        <Download />
        <Footer />
      </div>
    );
  }
}
export default PCContents;