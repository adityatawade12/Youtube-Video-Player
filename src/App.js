import './App.css';

import React, { Component } from 'react'
import SearchBar from './components/SearchBar';

export default class App extends Component {
  submitData=(e)=>{
    console.log("bye")
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.submitData}/>
        
      </div>
      
    );
  }
}
