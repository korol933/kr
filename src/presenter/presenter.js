import MovieModel from '../../model/movie-model.js';
import { renderMovieList } from '../../framework/render.js';

class MoviePresenter {
    constructor() {
        this.model = new MovieModel();
        this.movieListElement = document.getElementById('movie-list');
    }

    init() {
        this.renderMovies();
    }

    renderMovies() {
        const movies = this.model.getAllMovies();
        renderMovieList(this.movieListElement, movies);
    }
}

export default MoviePresenter;