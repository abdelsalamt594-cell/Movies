const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDgwNmFjZWE3ZDE0M2I1YTdkYTZiYmRkNWE0YjMwZCIsIm5iZiI6MTcyMjc5NTM4NS40NDUsInN1YiI6IjY2YWZjNTc5ZDBlMzg4MjcxMjViN2U5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VafLQ9ITWPGl_SA6ZAdEb2L0ec_7_ryOf8P1mCqcKpM",
  },
};

let detailsContainer = document.getElementById("movie-details");

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

async function fetchMovieDetails() {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options,
  );
  let movie = await res.json();
  console.log(movie);
  detailsContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`;
  detailsContainer.innerHTML = `<div class="row g-2">
        <div class="col-md-4">
          <img
            class="img-fluid rounded"
            src="${
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : ""
            }"
            alt="${movie.title}"
          >
        </div>

        <div class="col-md-6">
          <h1>${movie.title}</h1>

          <p><strong>Release Date:</strong>
            ${movie.release_date || "Unknown"}
          </p>

          <p><strong>Rating:</strong>
            ${movie.vote_average?.toFixed(1) ?? "N/A"} / 10
          </p>

          <p><strong>Runtime:</strong>
            ${movie.runtime ? `${movie.runtime} minutes` : "Unknown"}
          </p>

          <p><strong>Genres:</strong>
            ${movie.genres.map((genre) => genre.name).join(", ")}
          </p>

          <h3>Overview</h3>
          <p>${movie.overview || "No description available."}</p>

          <a href="index.html" class="btn btn-primary">
            Back to Movies
          </a>
        </div>
      </div>
    `;
}

fetchMovieDetails();
