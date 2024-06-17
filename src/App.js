import React from "react";
import "./assets/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NewsPage from "./pages/NewsPage";

import MoviePage from "./pages/MoviePage";


import img4 from './assets/images/image5.webp';
import img6 from './assets/images/image6.png';

import { useParams } from "react-router-dom";


const moviesList = [
  {
    id: 1,
    title: 'Фуріоза: Шалений Макс. Сага',
    duration: 148,
    director: 'Джордж Міллер',
    actors: ['Аня Тейлор-Джой', 'Кріс Гемстворт', 'Аліла Браун', 'Том Берк', 'та інші.'],
    description: 'Коли світ занепав, юну Фуріозу викрадають із Зеленого Місця Багатьох Матерів та віддають до рук великої Байкерської Орди на чолі з Дементусом. Пробираючись разом Пусткою, вони натрапляють на Цитадель Несмертела Джо. Поки два тирани воюють за панування, на Фуріозу чекає багато випробувань у спробі віднайти шлях додому.',
    poster: img4,
    likes: 21,
    showDates: ['09:30', '12:45', '24:21']
  },
  {
    id: 2,
    title: 'Фільм 1',
    duration: 120,
    director: 'Режисер 1',
    actors: ['Актор 1', 'Актор 2'],
    description: 'Короткий опис фільму 1',
    poster: img6,
    likes: 21,
    showDates: ['09:30', '12:45', '24:21']
  },
   {
    id: 3,
    title: 'Фільм 1',
    duration: 120,
    director: 'Режисер 1',
    actors: ['Актор 1', 'Актор 2'],
    description: 'Короткий опис фільму 1',
    poster: img4,
    likes: 21,
    showDates: ['09:30', '12:45', '24:21']
  }
];

const films = [
  {
    id: 1,
    title: "Inception",
    banner: "https://static1.colliderimages.com/wordpress/wp-content/uploads/the-avengers-movie-poster-banners-slice-03.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    poster: "https://i.ebayimg.com/images/g/~WwAAOSw4S1k3rB6/s-l1600.webp",
    ageLimit: "13+",
    genre: "Sci-Fi, Thriller",
    duration: "148 min",
    year: "2010",
    country: "USA",
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    ratings: "8.8",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: 2,
    title: "The Dark Knight",
    banner: "https://static1.colliderimages.com/wordpress/wp-content/uploads/the-avengers-movie-poster-banners-slice-03.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    poster: "https://image.url/dark-knight-poster.jpg",
    ageLimit: "13+",
    genre: "Action, Crime, Drama",
    duration: "152 min",
    year: "2008",
    country: "USA",
    director: "Christopher Nolan",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    ratings: "9.0",
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
  },
  {
    id: 3,
    title: "Interstellar",
    banner: "https://static1.colliderimages.com/wordpress/wp-content/uploads/the-avengers-movie-poster-banners-slice-03.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    poster: "https://image.url/interstellar-poster.jpg",
    ageLimit: "13+",
    genre: "Adventure, Drama, Sci-Fi",
    duration: "169 min",
    year: "2014",
    country: "USA",
    director: "Christopher Nolan",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    ratings: "8.6",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 4,
    title: "The Matrix",
    banner: "https://static1.colliderimages.com/wordpress/wp-content/uploads/the-avengers-movie-poster-banners-slice-03.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    trailerUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
    poster: "https://image.url/matrix-poster.jpg",
    ageLimit: "16+",
    genre: "Action, Sci-Fi",
    duration: "136 min",
    year: "1999",
    country: "USA",
    director: "Lana Wachowski, Lilly Wachowski",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    ratings: "8.7",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    banner: "https://static1.colliderimages.com/wordpress/wp-content/uploads/the-avengers-movie-poster-banners-slice-03.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
    poster: "https://image.url/shawshank-poster.jpg",
    ageLimit: "16+",
    genre: "Drama",
    duration: "142 min",
    year: "1994",
    country: "USA",
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    ratings: "9.3",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  }
];



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/news" element={<NewsPage/>} />

        {/* <Route path="/movies/:id" element={<MoviePage moviesData={moviesList}/>} /> */}
        {/* <Route path="/movies/:id" render={({ match }) => {
          const film = films[match.params.id];
          return <MoviePage film={film} />;
        }} /> */}


        <Route path="/movies/:id" element={<MoviePageWrapper/>} />

        {/* const { id } = useParams();
        const film = moviesData && moviesData.find(movie => movie.id === parseInt(id)); */}




      </Routes>
    </div>

    </Router>
  );
}

function MoviePageWrapper() {
  // Access the id parameter from the URL
  let { id } = useParams();

  // Find the film object with the matching id
  const film = films.find(film => film.id === parseInt(id));

  // Render the MoviePage component with the found film object
  return <MoviePage film={film} />;
}

export default App;
