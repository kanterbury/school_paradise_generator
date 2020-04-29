import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Seat from './Seat';

class SeatOrder extends Component {

  render(){
    let charaList = this.props.charaNameList;
    
    let colList = [];
    let RowList = []; 
    for(let i = 0; i < charaList.length/6; i++){
      for(let j = 0; j < 6; j++){
        let index = i*6 + j;
        colList.push(
          <Col xs={2} key={index}>
            <Seat charaName = {charaList[index]} seatNum={index}/>
          </Col>
        );
      }
      let row = <Row className="seatRow" key={i}>{colList}</Row>
      RowList.push(row);
      colList = [];
    }
    
    return(
      <div>
        <div id="seatOrder">
          <Grid>
            {RowList}
          </Grid>
        </div>
      </div>
    );
  }
}
export default connect((state)=>state)(SeatOrder);