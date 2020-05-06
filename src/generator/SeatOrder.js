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
      <p>
        <div>
          <Grid id="seatOrder">
            {RowList}
            <Row className="seatRow" center="xs" key="kyotaku">
              <Col xs={4}>
                <Seat charaName = "教卓" />
              </Col>
            </Row>
            <Row end="xs" key="teikyo">
              powered by 学園天国ジェネレーター<br />
              https://school-paradise-generator.netlify.app
            </Row>
          </Grid>
        </div>
      </p>
    );
  }
}
export default connect((state)=>state)(SeatOrder);