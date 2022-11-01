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
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    
    })
    
  }

  onVideoSelect=(video)=>{
    
    this.setState({selectedVideo:video})
  }

  componentDidMount(){
    this.submitData('Epicurious');
  }

  render() {
    return (
      <div className='ui '>
        <SearchBar onSubmit={this.submitData}/>
        <div className="ui page-content">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
          <div className="five wide column">
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
          </div>

        
          </div>
        </div>
        </div>
        
        
        
      </div>
      
    );
  }
}
