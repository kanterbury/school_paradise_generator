import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import ClassNames from 'classnames';

class Seat extends Component{

  render(){
    let charaName
    if(this.props.charaName){
      charaName = this.props.charaName;
    } else {
      charaName = this.props.seatNum+1;
    }

    const classNameForSeatRow = ClassNames({
      "charaName": true,
      "is-empty-seat" : !(this.props.charaName),
    });

    return(
      <div className="seat">
        <Row className={classNameForSeatRow} middle="xs" center="xs">
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