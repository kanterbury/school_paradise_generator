import React, { Component } from 'react';

class Seat extends Component{

  seat = {
    border: "solid 3px #000000",
    padding: "10px,5px,10px,5px"
  }

  render(){
    let charaName
    if(this.props.charaName){
      charaName = this.props.charaName;
    } else {
      charaName = "　　　　"
    }

    return(
      <div style={this.seat}>
        {charaName}
      </div>
    )
  }
}
export default Seat;