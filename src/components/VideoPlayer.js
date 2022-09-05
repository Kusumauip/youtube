import React from 'react';
import YouTube from 'react-youtube';

class VideoPlayer extends React.Component{
     
    render(){
        const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
        return (
            <YouTube videoId={this.props.id} opts={opts} />
            
        )
    }
}

export default VideoPlayer