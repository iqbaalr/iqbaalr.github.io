// Mendapatkan referensi ke elemen <tbody>, input pencarian, dan tombol pencarian
var index = document.querySelector('#index');
var searchInput = document.querySelector('#searchInput');
var searchButton = document.querySelector('#searchButton');

// Fungsi untuk memuat daftar film berdasarkan judul pencarian
function loadMoviesAndTVShowsByTitle(title) {
    // Membersihkan isi tabel sebelum memuat data baru
    index.innerHTML = '';

    // Mengambil data dari API TMDb berdasarkan judul pencarian untuk film
    const movieSearchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8786ffd1b392111a67759e0e7389bc3a&query=' + encodeURIComponent(title);
    const tvShowSearchUrl = 'https://api.themoviedb.org/3/search/tv?api_key=8786ffd1b392111a67759e0e7389bc3a&query=' + encodeURIComponent(title);

    // Fetch data film dan acara TV secara paralel menggunakan Promise.all
    Promise.all([fetch(movieSearchUrl), fetch(tvShowSearchUrl)])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(dataArray => {
            const movieSearching = document.querySelector('.movie-searching');

            // Menampilkan daftar film
            dataArray.forEach(data => {
                data.results.forEach(result => {
                    const movieCard = document.createElement('div');
                    movieCard.classList.add('movie-card');
                    movieCard.style.marginTop = '10%';

                    const movieImage = document.createElement('img');
                    movieImage.src = 'https://image.tmdb.org/t/p/w200' + result.poster_path;
                    movieImage.alt = result.title || result.name;

                    const movieTitle = document.createElement('h2');
                    movieTitle.textContent = result.title || result.name;

                    const movieRating = document.createElement('p');
                    movieRating.textContent = 'Rating: ' + (result.vote_average || result.vote_average === 0 ? result.vote_average + " \u{2B50}" : 'N/A');

                    const moviePopularity = document.createElement('p');
                    moviePopularity.textContent = 'Popularity: ' + (result.popularity || 'N/A');

                    movieCard.appendChild(movieImage);
                    movieCard.appendChild(movieTitle);
                    movieCard.appendChild(movieRating);
                    movieCard.appendChild(moviePopularity);

                    // Menambahkan event listener pada poster
                    movieImage.addEventListener('click', function () {
                        showMovieDetails(result);
                    });

                    movieSearching.appendChild(movieCard);
                });
            });
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}


// Event listener untuk tombol pencarian
searchButton.addEventListener('click', function () {
    var searchTitle = searchInput.value;
    loadMoviesAndTVShowsByTitle(searchTitle);
});
// Mengambil data dari API TMDb
fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8786ffd1b392111a67759e0e7389bc3a')
    .then(response => response.json())
    .then(data => {
        const movieContainer = document.querySelector('.movie-container');

        // Menampilkan daftar film
        data.results.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            const movieImage = document.createElement('img');
            movieImage.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement('h2');
            movieTitle.textContent = movie.title;

            const movieRating = document.createElement('p');
            movieRating.textContent = 'Rating: ' + movie.vote_average + " \u{2B50}";
            const moviePopularity = document.createElement('p');
            moviePopularity.textContent = 'Popularity: ' + movie.popularity;

            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(movieRating);
            movieCard.appendChild(moviePopularity)

            // Menambahkan event listener pada poster
            movieImage.addEventListener('click', function () {
                showMovieDetails(movie);
            });

            movieContainer.appendChild(movieCard);
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });

// Mendapatkan daftar TV shows
fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=8786ffd1b392111a67759e0e7389bc3a')
    .then(response => response.json())
    .then(data => {
        const movieContainer = document.querySelector('.movie-tv');

        // Menampilkan daftar TV shows
        data.results.forEach(show => {
            const showCard = document.createElement('div');
            showCard.classList.add('movie-card');

            const showImage = document.createElement('img');
            showImage.src = 'https://image.tmdb.org/t/p/w500' + show.poster_path;
            showImage.alt = show.name;

            const showTitle = document.createElement('h2');
            showTitle.textContent = show.name;
            const showRating = document.createElement('p');
            showRating.textContent = 'Rating: ' + show.vote_average + " \u{2B50}";
            const moviePopularity = document.createElement('p');
            moviePopularity.textContent = 'Popularity: ' + show.popularity;

            showCard.appendChild(showImage);
            showCard.appendChild(showTitle);
            showCard.appendChild(showRating);
            showCard.appendChild(moviePopularity);

            // Menambahkan event listener pada poster
            showImage.addEventListener('click', function () {
                showMovieDetails(show);
            });

            movieContainer.appendChild(showCard);
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });


// Fungsi untuk menampilkan informasi film saat poster di tekan
function showMovieDetails(movie) {
    // Membuat elemen <div> untuk overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Membuat elemen <div> untuk informasi film
    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info');
    movieInfo.style.color = '#000000';
    movieInfo.style.borderRadius = '10%';

    // Membuat elemen <h2> untuk judul film
    const title = document.createElement('h2');
    title.textContent = movie.title;
    title.style.color = '#000000'

    const showTitle = document.createElement('h2');
    showTitle.textContent = movie.name;
    showTitle.style.color = '#000000'

    // Membuat elemen <p> untuk deskripsi film
    const overview = document.createElement('p');
    overview.textContent = movie.overview;

    // Menambahkan elemen-elemen ke dalam movieInfo
    movieInfo.appendChild(showTitle);
    movieInfo.appendChild(title);
    movieInfo.appendChild(overview);

    // Menambahkan movieInfo ke dalam overlay
    overlay.appendChild(movieInfo);

    // Menambahkan overlay ke dalam body
    document.body.appendChild(overlay);

    // Event listener untuk menutup overlay saat diklik di luar informasi film
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.remove();
        }
    });
}

