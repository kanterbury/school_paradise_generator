import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateSeatOrder } from './Store';
import {Grid, Row, Col} from 'react-flexbox-grid';
import html2canvas from 'html2canvas';

class Input extends Component {

  constructor(props){
    super(props);

    this.state={
      seatNum: 24,
      charaNameList: [],
    }

    this.doChangeNumSeat = this.doChangeNumSeat.bind(this);
    this.doInputCharaName = this.doInputCharaName.bind(this);
    this.doGenerateSeatOrder = this.doGenerateSeatOrder.bind(this);
    this.doGenerateCanvas = this.doGenerateCanvas.bind(this);
  }

  inputForm = {
    textAlign: "right",
  }

  doChangeNumSeat(e){
    this.setState({
      seatNum: e.target.value,
      charaNameList: this.state.charaNameList,
    })
  }

  doInputCharaName(e){
    let newCharaNameList = this.state.charaNameList.slice();
    newCharaNameList[e.target.name] = e.target.value;
    this.setState({
      seatNum: this.state.seatNum,
      charaNameList: newCharaNameList,
    })
  }

  doGenerateSeatOrder(e){
    e.preventDefault();    
    let action = generateSeatOrder(this.state.seatNum, this.state.charaNameList);
    this.props.dispatch(action);
  }

  doGenerateCanvas(e){
    const input = document.getElementById('seatOrder');

    html2canvas(input).then(canvas => {
      document.body.appendChild(canvas)
    });
  }

  render(){
    let colList = [];
    let RowList = [];
    for(let i = 0; i < this.state.seatNum/3; i++){
      for(let j = 0; j < 3; j++){
        let index = i*3 + j;
        colList.push(
          <Col xs={12} sm={4} md={4} lg={4} key={index}>
            <div style={this.inputForm}>
              {index+1}：<input type="text" name={index} onChange={this.doInputCharaName}/>
            </div>
          </Col>
        );
      }
      let row = <Row key={i}>{colList}</Row>
      RowList.push(row);
      colList = [];
    }

    return(
      <div>
        <p>1. クラスの席数を選択してください：
        <select name="numOfPeople" defaultValue="24" onChange={this.doChangeNumSeat}>
          <option value="18">18席</option>
          <option value="24">24席</option>
          <option value="30">30席</option>
          <option value="36">36席</option>
        </select>
        </p>
        <p>2. 推しのキャラクターを入力してください。<br />
        入力しなかったフォームの数が、あなたが座ることができる席の数になります。
        </p>
        <Grid>
          {RowList}
        </Grid>
        <button onClick={this.doGenerateSeatOrder}>出力</button>
        <button onClick={this.doGenerateCanvas}>html2canvas</button>
      </div>
    );
  }
}
export default connect()(Input);