import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      userName: '',
      data: []
    };
    this.findUserName = this.findUserName.bind(this);
  }

  setUserName(value){
        this.setState({
             userName: value
        });
    }

  findUserName() {
    console.log('Function hit with username');
     fetch(`https://api.github.com/users/${this.state.userName}`)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ data: data })
        })
        .catch(console.log);
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
     
        <form>
    	  <input 
          type="text" 
          className="search-query form-control" 
          placeholder="Enter username" 
          onChange={e => {this.setUserName(e.target.value)}}
        />
        <button onClick={this.findUserName}>
        Go!</button>
        <div>{this.state.data}</div>
    	  </form>
    </div>
    );
  }
}

render(<App />, document.getElementById('root'));
