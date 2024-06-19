import React from "react";
import "./assets/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import MoviePage from "./pages/MoviePage";

import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { SeatSelectionProvider } from "./pages/SeatSelectionContext";
import SeatSelection from "./pages/SeatSelection";
import { UserProvider } from "./components/UserContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return null;
}

{
  /** MoviePage info */
}
const films = [
  {
    id: 1,
    title: "Inception",
    banner:
      "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png",
    trailerUrl: "https://www.youtube.com/embed/eY-pRQ2eMG8",
    poster: "https://i.ebayimg.com/images/g/~WwAAOSw4S1k3rB6/s-l1600.webp",
    ageLimit: "13+",
    genre: "Sci-Fi, Thriller",
    duration: "148 min",
    year: "2010",
    country: "USA",
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    ratings: "8.8",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one.",
    showDates: ["09:30", "12:00", "21:21"],
  },
  {
    id: 2,
    title: "Фуріоза: Шалений Макс. Сага",
    banner:
      "https://multiplex.ua/images/94/15/9415d2c5f580aab7c31ddf780e6ad106.jpeg",
    trailerUrl: "https://www.youtube.com/embed/wJz4e2aBsHg",
    poster: "https://womo.ua/wp-content/uploads/2024/03/furiosa-poster_1.jpg",
    ageLimit: "18+",
    genre: "Екшн, Бойовик, Пригодницький",
    duration: "148 хв",
    year: "2024",
    country: "Австралія, США",
    director: "Джордж Міллер",
    actors: [
      "Аня Тейлор-Джой",
      "Кріс Гемстворт",
      "Аліла Браун",
      "Том Берк",
      "та інші.",
    ],
    ratings: "7.8",
    description:
      "Фуріоза (Аня Тейлор-Джой) була зовсім юною, коли звичний світ почав руйнуватись та зникати. Дівчинку викрали з її дому, Зеленого Місця Багатьох Матерів. Орда Байкерів начолі з Дементусом (Кріс Гемстворт) тепер вважає Фуріозу своєю власністю. Поки тривають криваві війни між Дементусом та Несмертним Джо, дівчина намагається вижити. Віднині головна мета її життя – повернутися додому.",
      showDates: ["10:00", "15:30", "20:00"],
  },
  {
    id: 3,
    title: "Уявні друзі",
    banner:
      "https://bhfilms.com.ua/wp-content/uploads/if_facebook.jpg",
    trailerUrl: "https://www.youtube.com/embed/9Q6ioSgfOxQ",
    poster: "https://kino-teatr.ua/public/main/films/2024-04/poster_660d19f095ac8.jpg",
    ageLimit: "0+",
    genre: "Кінокомедія, Пригодницький, Фентезі, Мюзикл",
    duration: "104 хв",
    year: "2024",
    country: "США",
    director: "Джон Кразінські",
    actors: ["Раян Рейнольдс",
      "Джон Кразінські",
      "Блейк Лайвлі",
      "Бред Пітт",
      "та інші."],
    ratings: "6.7",
    description:
      "Дівчинка на ім’я Бі (Кейлі Флемінг) раптом починає бачити уявних друзів. Звісно, деякі діти фантазують про таку компанію. Однак Бі нічого не вигадувала. Дівчинка бачить безліч дивних персонажів, яких вигадав хтось інший. Виявляється, що такою самою силою наділений і її сусід (Раян Рейнольдс). Тепер вони удвох даватимуть раду чималій когорті чудернацьких створінь. Справа в тім, що діти, які вигадали цих персонажів, давно виросли та забули про своїх кращих друзів. Було б добре їм знову зустрітися.",
    showDates: ["12:45", "17:00", "18:30"],
    },
  {
    id: 4,
    title: "Будинок Слово. Нескінчений роман",
    banner:
      "https://cdn.drukarnia.com.ua/65afee792e16847e21f7013d/images/articles/66674bbdfe538e0bbb5f90f6/hsHKgWHaAh_ptqwr8s3.jpeg",
    trailerUrl: "https://www.youtube.com/embed/MxR257eHEFE",
    poster: "https://lyuk.media/wp-content/uploads/2022/07/photo5325644200638790697.jpg",
    ageLimit: "16+",
    genre: "Історична драма, Детектив",
    duration: "120 хв",
    year: "2024",
    country: "Україна",
    director: "Тарас Томенко",
    actors: ["Довженко В'ячеслав Валерійович",
      "Попенко Геннадій Миколайович",
      "Ніна Набока",
      "та інші."],
    ratings: "8.4",
    description:
      "1927 року у Харкові за наказом Сталіна збудовано особливий будинок. Тут оселилися кращі українські митці — поети, письменники, художники та режисери. Сама лише можливість жити тут вже була для тогочасних творців визнанням. Якось у будинку з'являється новенький. Він працює коректором преси та понад усе мріє влитися в когорту провідних письменників. Аби оселитися тут йому дійсно знадобився талант — талант підслуховувати та переповідати все почуте агенту НКВС.",
    showDates: ["10:00", "15:30", "22:00"],
    }
];

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<LoginPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/movies/:id" element={<MoviePageWrapper />} />
            <Route
              path="/ticket/:movieId/:timeId"
              element={
                <SeatSelectionProvider moviesList={films}>
                  <SeatSelection />
                </SeatSelectionProvider>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

function MoviePageWrapper() {
  // Access the id parameter from the URL
  let { id } = useParams();

  // Find the film object with the matching id
  const film = films.find((film) => film.id === parseInt(id));

  // Render the MoviePage component with the found film object
  return <MoviePage film={film} />;
}

export default App;
