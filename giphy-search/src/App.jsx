import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState } from 'react';
/*
  Type text in GifSearch component searchbar
  Hit submit button => fetch => setGifs => re-render 
  See gifs render in GifContainer

  GifContainer => gifs (presentational)
  GifSearch => setGifs, setQuery, query
*/
function App() {

  const [gifs, setGifs] = useState([]);

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setGifs={setGifs} />
        <br />
        <GifContainer gifs={gifs} />
      </div>
    </div>
  );
}

export default App;
