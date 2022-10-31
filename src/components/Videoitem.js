import React from 'react'
import './VideoItem.css';

const Videoitem = ({video,onVideoSelect}) => {

    const click=()=>{
        
        onVideoSelect(video)
    }


  return (<>
  <div className="video-item item" onClick={click}>
    <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
    <div className="content">
      <div className="header">{video.snippet.title}</div>
      {/* <div className="description">{video.snippet.description}</div> */}
    </div>
  </div>
  
  
        </>
  )
}

export default Videoitem