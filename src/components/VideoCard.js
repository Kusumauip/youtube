import React from 'react';
import './VideoCard.css'

class VideoCard extends React.Component{
    OnDivClick=(e)=>{
      this.props.onClick(this.props.videoID)
    }
    render(){
        return(
            <div className="videoContainer">
                <div className='title' onClick={this.OnDivClick}>
                <img src={this.props.thumbnail} alt={this.props.title}></img>
                <br></br>
                <p>{this.props.channel}</p>
                </div>
                <div className='title'>
                <h4>{this.props.title}</h4>
                {this.props.description}
                </div>
                
            </div>
        )
    }
}

export default VideoCard