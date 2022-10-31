import React from 'react'
import Videoitem from './Videoitem'

export default function VideoList({videos,onVideoSelect}) {
 const renderedList=   videos.map((video)=>{
        return <Videoitem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
    })
  return (
    <div className='ui relaxed divided list'>
        {renderedList}
        
    </div>
  )
}
