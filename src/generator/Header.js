import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <h1>学園天国ジェネレーター</h1>
        <p>好きな人物やキャラクターをクラスメイトにして、学校のクラスの席順をランダム生成できます。<br/>
          最高のクラスができたら、席順をダウンロードしてSNSにアップして、<br/>
          どこの席がいいかみんなで話してくれたら嬉しいです。
        </p>
      </div>
    );
  }
}
export default Header;