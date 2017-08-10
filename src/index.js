import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyDm-fVkKpNgEemVQX5M9n28xMYvvgFnObo';

//Create a new component . This should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'beachwave'}, (videos) => {
      this.setState({ videos });
      //this.setState({ videos: videos})
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//Take this component's generated HTML and put in on the page
//(in the DOM)
ReactDOM.render(<App />,
  document.querySelector('.container'));
