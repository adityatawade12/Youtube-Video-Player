import './App.css';

import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';


export default class App extends Component {

  state={videos:[]}
  submitData=async (term)=>{
    console.log(term)
   const response= await youtube.get('/search',{
      params:{
        q:term
      }

    
    })
    this.setState({videos:response.data.items})
    console.log(this.state.videos)
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.submitData}/>
        
      </div>
      
    );
  }
}

//AIzaSyA6ALaEf8xi4cl9_MJnFbkknEb9VCPnRzU