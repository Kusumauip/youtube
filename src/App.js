import React from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import './components/Videos.css'


class App extends React.Component{
    state={
        responses:[],
        videoId:''
    };
    
    onSearchSubmit=(query)=>{
        const key='AIzaSyB2dbJtMJd3GVkNohZU1zNrovxbknzj2R8';
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxresults=3&q=${query}&key=${key}`)
        .then(response=>{
                this.setState({
                    responses:response.data.items,videoId:''
                })  
        })
    }
    onVideoClick=(videoId)=>{
       this.setState({videoId:videoId})
    }
    render(){
        return (
            <div className='ui container' style={{marginTop:"10px"}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <div className='mainSection'>
            <VideoList responses = {this.state.responses} onClick={this.onVideoClick}/>
            {(this.state.videoId!=='')?
            <VideoPlayer id={this.state.videoId}/>:<></>}
            </div>
            </div>
        )
    }
}

export default App