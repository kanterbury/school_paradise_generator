import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateSeatOrder } from './Store';
import { Grid, Row, Col} from 'react-flexbox-grid';
import { Button, Form }  from 'react-bootstrap';

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
    console.log(this.state.charaNameList);    
    let action = generateSeatOrder(this.state.seatNum, this.state.charaNameList);
    this.props.dispatch(action);
  }

  render(){
    let colList = [];
    let RowList = [];
    for(let i = 0; i < this.state.seatNum/3; i++){
      for(let j = 0; j < 3; j++){
        let index = i*3 + j;        
        let inputIndex = {index}.index+1 +  "人目";
        colList.push(
          <Col xs={12} sm={4} md={4} lg={4} key={index}>
            <Form.Control className="nameInput" type="text" name={index} placeholder={inputIndex} onChange={this.doInputCharaName} />
          </Col>
        );
      }
      let row = <Row key={i}>{colList}</Row>
      RowList.push(row);
      colList = [];
    }

    return(
      <div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>1. クラスの席数を選択してください：</Form.Label>
          <Form.Control className="seatNumInput" as="select" defaultValue="24" onChange={this.doChangeNumSeat}>
            <option value="18">18席</option>
            <option value="24">24席</option>
            <option value="30">30席</option>
            <option value="36">36席</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            2. クラスメイトを入力してください。<br />
            入力しなかったフォームの数が、あなたが選択できる席の数になります。
          </Form.Label>
          <Grid>
            {RowList}
          </Grid>
        </Form.Group>
        3. 好みの席順になるまで、席替えを繰り返しましょう。
        <Button variant="primary" onClick={this.doGenerateSeatOrder}>席替え</Button>
      </div>
    );
  }
}
export default connect()(Input);