import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { error } from 'util';


class App extends Component {
constructor() {
  super();

  this.state = {
    roster: [],
  }


  this.componentDidMountTwo = this.componentDidMountTwo.bind(this);
  this.put = this.put.bind(this);
}




componentDidMount(){
  let promise = axios.post('/api/task')
  promise.then(res => {
    console.log(res.data)
    this.setState({roster:res.data.player})
  })
}
componentDidMountTwo(){
  let promis = axios.delete('/api/task/0')
  promis.then(res => {
    this.setState({roster:res.data})
  })
}
put(){
  let promise = axios.put('/api/task/0')
  promise.then(res => {
    this.setState({roster:res.data})
  })
}


  render() {
    console.log(this.state.roster)
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <div className="App-intro">
        <input />
        <button onClick={this.put}>ADD</button>
          {this.state.roster.map((player, index) => {
            return <p key={index}>{player.strPlayer}</p>
          })}
        </div>
        <button onClick={this.componentDidMountTwo}>DELETE</button>
      </div>
    );
  }
}

export default App;
