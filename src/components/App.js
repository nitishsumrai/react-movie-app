import React from 'react';

import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
class App extends React.Component {


  componentDidMount() {
    const { store } = this.props;

    // add listener for state changes
    store.subscribe(() => {
      this.forceUpdate();
      console.log('UPDATED')
    })
    // make api call
    // dispatch action
    store.dispatch(
      // pass an action to reducer
      {
        type: 'ADD_MOVIES',
        movies: data
      }
    )

  }

  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard movie={movie} key={`movies-${index}`} />
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
