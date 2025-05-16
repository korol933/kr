import { Status, StatusLabel } from '../const.js';

export class MovieView {
    constructor() {
        this.form = document.getElementById('movie-form');
        this.titleInput = document.getElementById('movie-title');
        this.statusInput = document.getElementById('movie-status');
        this.movieList = document.getElementById('movie-list');
        this.statusFilter = document.getElementsByName('status-filter');
        this.favoriteFilter = document.getElementById('favorite-filter');
    }

    bindAddMovie(handler) {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            const title = this.titleInput.value.trim();
            const status = this.statusInput.checked ? Status.WATCHED : Status.UNWACHED;
            if (title) {
                handler(title, status);
                this.form.reset();
            }
        });
    }

    bindFilterChange(handler) {
        [...this.statusFilter].forEach(radio =>
            radio.addEventListener('change', handler)
        );
        this.favoriteFilter.addEventListener('change', handler);
    }

    bindFavoriteToggle(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('favorite-toggle')) {
                const id = e.target.dataset.id;
                handler(parseInt(id));
            }
        });
    }

    renderMovies(movies) {
        this.movieList.innerHTML = '';
        movies.forEach((movie) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <h3>${movie.title}</h3>
                <p>Статус: <strong>${StatusLabel[movie.status]}</strong></p>
                <button class="favorite-toggle" data-id="${movie.id}">
                    ${movie.status === Status.FAVOURITES ? '⭐️ Удалить из избранного' : '⭐️ Добавить в избранное'}
                </button>
                <button class="status-toggle" data-id="${movie.id}">
                    ${movie.status === Status.WATCHED ? '❌ Отметить как непросмотренный' : '✅ Отметить как просмотренный'}
                </button>
                <button class="delete-button" data-id="${movie.id}">Удалить</button>
            `;
            this.movieList.appendChild(card);
        });
    }

    bindDeleteMovie(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('delete-button')) {
                const id = e.target.dataset.id;
                handler(parseInt(id));
            }
        });
    }

    bindStatusToggle(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('status-toggle')) {
                const id = e.target.dataset.id;
                handler(parseInt(id));
            }
        });
    }

    getSelectedFilter() {
        const selected = [...this.statusFilter].find(r => r.checked);
        return selected?.value || 'all';
    }

    isFavoriteOnly() {
        return this.favoriteFilter.checked;
    }
}