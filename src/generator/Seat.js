import React, { Component } from 'react';

class Seat extends Component{

  render(){
    let charaName
    if(this.props.charaName){
      charaName = this.props.charaName;
    } else {
      charaName = this.props.seatNum+1;
    }

    return(
      <div className="seat">
        {charaName}
      </div>
    )
  }
}
export default Seat;