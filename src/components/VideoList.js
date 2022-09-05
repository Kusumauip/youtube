import React from 'react';
import VideoCard from './VideoCard';

class VideoList extends React.Component{
    onVideoClick=(videoId)=>{
        console.log(videoId)
        this.props.onClick(videoId)
    }
    render(){
        console.log(this.props.responses)
        return ( 
        
        <ul style={{listStyle:'none'}}>
            {this.props.responses.map(
           (youtubeVideo)=>{return (
           <li key={youtubeVideo.etag}><VideoCard
                                         thumbnail={youtubeVideo.snippet.thumbnails.default.url}
                                         title={youtubeVideo.snippet.title}
                                         description={youtubeVideo.snippet.title}
                                         channel={youtubeVideo.snippet.channelTitle}
                                         videoID={youtubeVideo.id.videoId}
                                         onClick={this.onVideoClick}/></li>)}
        )}
    </ul>
        )
    }
}

export default VideoList