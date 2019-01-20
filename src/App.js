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

  deleteCharHandler = (id) => {
    
    const text = this.state.userinput.split(''); 
    text.splice(id, 1);
    const updatedText = text.join('');
    this.setState({
      userinput: updatedText
    });
  }

  render() {

    const charList = this.state.userinput.split('').map((ch,idx) => {
      return <Char character = {ch} key = {idx} clicked = {() => this.deleteCharHandler(idx)}></Char>
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
