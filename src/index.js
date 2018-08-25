import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar'
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


const API_KEY = 'AIzaSyBi8skGEmZqgTJLvsmuwhLSy_5TOPfw6mE';



// Defining the actual component here
class App extends Component {
    constructor(props) {
        super(props);

        this.state =
            {
                videos: [],
                selectedVideo: null
            };

        YTSearch({ key: API_KEY, term: 'irfanjunejo' }, (videos) => {
            this.setState
                ({
                    videos: videos,
                    selectedVideo: videos[0]
                });
        });

    }

    render() {
        return (

            <div className="container">
                <SearchBar />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}


// Instentiating the copy of the above component

ReactDOM.render(<App />, document.querySelector('.container'));