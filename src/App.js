import './App.css';
import React from 'react';
import ToDo from './ToDo';
import Sample from './sample';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {items:[{id:0, "title":"help react", "done":true},{id:1, "title":"hhh", "done":false}, {id:2, "title":"one more", "done":false}]}
  }
  render(){
    // 배열을 순회하면서 출력할 내용을 생성 
    //item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    //배열을 순회하면서 출력물을 만들 때는 key설정 > 안하면 출력에는 문제 없지만 콘솔에 에러
    let display = this.state.items.map((item,idx) => (
      <ToDo item={item} key={item.id} />
    ))
    return(
      <div className='app'>
        {display}
      </div>
    )
  }
}


export default App;

