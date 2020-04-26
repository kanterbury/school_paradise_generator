import { createStore } from 'redux';

const initData = {
  seatNum: 24,
  charaNameList: ["竈門 炭治郎","竈門 禰豆子","我妻 善逸", "嘴平 伊之助", "栗花落 カナヲ", "不死川 玄弥",
"冨岡 義勇", "煉獄 杏寿郎"],
};

// レデューサー
export function generaterReducer(state = initData, action){
  switch (action.type) {
    case 'GENERATE':
      return generateReduce(state, action);
    
      default:
        return state;
  }
}

// レデュースアクション

// 席順生成のレデュース処理
function generateReduce(state, action){
  let newSeatNum = action.seatNum;
  let newCharaNameList = action.charaNameList;
  return {
    seatNum: newSeatNum,
    charaNameList: newCharaNameList,
  };
}

// アクションクリエーター

// タスク追加のアクション
export function generateSeatOrder(num, list) {
  return {
    type: 'GENERATE',
    seatNum: num,
    charaNameList: list,
  }
}

// ストアを作成
export default createStore(generaterReducer);