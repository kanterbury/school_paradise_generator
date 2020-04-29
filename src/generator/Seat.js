import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';

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
        <Row className="charaName" middle="xs">
          <Col xs={12}>
            <div>
              {charaName}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Seat;