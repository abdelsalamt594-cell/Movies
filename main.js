const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDgwNmFjZWE3ZDE0M2I1YTdkYTZiYmRkNWE0YjMwZCIsIm5iZiI6MTcyMjc5NTM4NS40NDUsInN1YiI6IjY2YWZjNTc5ZDBlMzg4MjcxMjViN2U5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VafLQ9ITWPGl_SA6ZAdEb2L0ec_7_ryOf8P1mCqcKpM",
  },
};

let tp = document.querySelector(".tp");

let sendOBJ = {
  navLink1:
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  navLink2: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  navLink3: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  navLink4: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
};

async function Moive(send) {
  tp.innerHTML = `
  <h3>Loading ......</h3>
  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  `;
  let response = await fetch(send, options);
  let data = await response.json();
  data = data.results;
  tp.innerHTML = "";
  console.log(data);
  data.forEach((movie) => {
    tp.innerHTML += `
  
    <div class="container-overlay">
   <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="" />
      <div class="overlay">
      <h1>${movie.title}</h1>
      <p>${movie.overview}</p>
      </div>
    </div>
    `;
  });
}

let navlink1 = document.getElementById("nav-link1");
let navlink2 = document.getElementById("nav-link2");
let navlink3 = document.getElementById("nav-link3");
let navlink4 = document.getElementById("nav-link4");
navlink1.addEventListener("click", function () {
  Moive(sendOBJ.navLink1);
});

navlink2.addEventListener("click", function () {
  Moive(sendOBJ.navLink2);
});

navlink3.addEventListener("click", function () {
  Moive(sendOBJ.navLink3);
});

navlink4.addEventListener("click", function () {
  Moive(sendOBJ.navLink4);
});
