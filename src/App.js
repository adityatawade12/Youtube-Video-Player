import './App.css';

import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


export default class App extends Component {

  state={
    videos:[],
    selectedVideo:null
  }
  submitData=async (term)=>{
    console.log(term)
   const response= await youtube.get('/search',{
      params:{
        q:term
      }

    
    })
    this.setState({videos:response.data.items})
    
  }

  onVideoSelect=(video)=>{
    
    this.setState({selectedVideo:video})
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.submitData}/>
        I have found {this.state.videos.length} videos

        <VideoDetail video={this.state.selectedVideo}/>

        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        
      </div>
      
    );
  }
}

//AIzaSyA6ALaEf8xi4cl9_MJnFbkknEb9VCPnRzU