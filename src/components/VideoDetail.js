import React from 'react'

const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading....</div>
    }

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    console.log(video.snippet.description)
  return  (
  
  <div>
    <div className="ui embed">
        <iframe src={videoSrc} frameBorder="0" title='videoPlayer' ></iframe>
    </div>
    <div className="ui segment">
    <h3 className="ui header">{video.snippet.title}</h3>
    <p>{video.snippet.description}</p>
    
    </div>
            
        
        </div>) 
  
}

export default VideoDetail