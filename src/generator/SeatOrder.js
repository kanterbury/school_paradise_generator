import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Seat from './Seat';

class SeatOrder extends Component {

  render(){
    let charaList = this.props.charaNameList;
    // 空要素を削除
    charaList = charaList.filter(Boolean);
    // 入力していないフォームの分だけ空文字列を追加
    for(let i = charaList.length; i < this.props.seatNum; i++){
      charaList.push("");
    }

    //配列シャッフル関数
    const shuffle = ([...array]) => {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    //キャラリストをシャッフル
    charaList = shuffle(charaList)
    
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