import { createStore } from 'redux';

const initData = {
  seatNum: 24,
  charaNameList: ["","","竈門 禰豆子","","","嘴平 伊之助","","","", "栗花落 カナヲ", "",
"冨岡 義勇","","不死川 玄弥","","","我妻 善逸","","竈門 炭治郎","", "煉獄 杏寿郎"],
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

  //配列シャッフル関数
  const shuffle = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let charaList = action.charaNameList;
    // 空要素を削除
    charaList = charaList.filter(Boolean);
    // 入力していないフォームの分だけ空文字列を追加
    for(let i = charaList.length; i < action.seatNum; i++){
      charaList.push("");
    }

  let newSeatNum = action.seatNum;
  let newCharaNameList = shuffle(charaList);
  return {
    seatNum: newSeatNum,
    charaNameList: newCharaNameList,
  };
}

// アクションクリエーター

// 席順生成のアクション
export function generateSeatOrder(num, list) {
  return {
    type: 'GENERATE',
    seatNum: num,
    charaNameList: list,
  }
}

// ストアを作成
export default createStore(generaterReducer);