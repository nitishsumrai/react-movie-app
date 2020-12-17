import React from 'react';
import { connect } from "react-redux";
import { handleMovieSearch, addToMovies } from '../actions/index';
class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    }

    handleSearch = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));

    };

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value,

        })
    }
    handleAddTOMovies = (movie) => {
        this.props.dispatch(addToMovies(movie));

    }
    render() {
        const { result: movie, showSearchResults } = this.props.search;

        console.log('re-rendering')
        return (<div className="nav">
            <div className="search-container">
                <input onChange={this.handleChange} />
                <button id='search-btn' onClick={this.handleSearch}> Search</button>
                {showSearchResults &&
                    (<div className="search-results">
                        <div className="search-result">

                            <img alt="search-pic" src={movie.Poster}></img>
                            <div className="movie-info">
                                <span >{movie.Title}</span>
                                <button  onClick={() => this.handleAddTOMovies(movie)}>Add To Movies</button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div >)

    }
}


function mapStateToTheProps(state) {
    return {
        search: state.search
    }
}
const ConnectedNavbarComponent = connect(mapStateToTheProps)(Navbar)

export default ConnectedNavbarComponent;