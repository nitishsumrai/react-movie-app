import React from 'react';

import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, changeListElement } from '../actions/index';
import { connect } from "react-redux";
class App extends React.Component {


  componentDidMount() {
  

    // make api call
    // dispatch action
    // pass an action to reducer
    this.props.dispatch(addMovies(data));
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;  // { movies:{} , search:{}}
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


    const { movies, search } = this.props;  // { movies:{} , search:{}}
    const { show_favourite } = movies;
    const list = show_favourite ? movies.favourites : movies.list;

    return (
      <div className="App">
        <Navbar
          
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
                dispatch={this.props.dispatch}
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



// state is store's data
function callback(state) {
  return {
      movies: state.movies,
      search: state.search
  }
}
const ConnectedAppComponent = connect(callback)(App);
export default ConnectedAppComponent;
