import React from 'react';

import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, changeListElement } from '../actions/index';
class App extends React.Component {


  componentDidMount() {
    const { store } = this.props;

    // add listener for state changes
    store.subscribe(() => {
      this.forceUpdate();
      console.log('UPDATED')
      console.log(this.props.store.getState());
    })
    // make api call
    // dispatch action
    // pass an action to reducer
    store.dispatch(addMovies(data));
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();  // { movies:{} , search:{}}
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    //  console.log(index)
    if (index !== -1) {
      // movie found
      return true;
    }
    return false;
  };
  handleListElement = (showfavourite) => {
    const { store } = this.props;
    store.dispatch(changeListElement(showfavourite));
  }
  render() {
    const { movies, search } = this.props.store.getState();  // { movies:{} , search:{}}
    const { show_favourite } = movies;
    const list = show_favourite ? movies.favourites : movies.list;
    return (
      <div className="App">
        <Navbar
          dispatch={this.props.store.dispatch}
          search={search}
        />
        <div className="main">
          <div className="tabs">

            <div className={`tab ${show_favourite ? '' : 'active-tabs'}`} onClick={() => { this.handleListElement(false) }}>Movies</div>
            <div className={`tab ${show_favourite ? 'active-tabs' : ''}`} onClick={() => { this.handleListElement(true) }}>Favourites</div>
          </div>
          <div className="list">

            {list.map((movie, index) => {
              return <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            })}
          </div>
          {list.length === 0 ? <div className='no-movies'>No movies to Display</div> : null}
        </div>
      </div>
    );
  }
}
export default App;
