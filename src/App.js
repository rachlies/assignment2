import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userinput : ''
  }
  
  inputChangeHandler = (event) => {
    this.setState({
      userinput: event.target.value
    })
  }


  render() {

    const charList = this.state.userinput.split('').map((ch,idx) => {
      return <Char character = {ch} key = {idx}></Char>
    })

    return (
      <div className="App">
        <input type="text" onChange = {this.inputChangeHandler} value = {this.state.userinput}></input>
        <p>length: {this.state.userinput.length}</p>
        <Validation length={this.state.userinput.length}></Validation>
        {charList}
      </div>
    );
  }
}

export default App;
