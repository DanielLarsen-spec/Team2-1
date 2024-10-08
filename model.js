const model = {
  app: {
    pages: ["index", "profile", "search", "filmInfo", "register", "login"],
    currentPage: "index",
    loggedIn: false,
    darkMode: true,
  },

  input: {
    logIn: {
      userName: null,
      password: null,
    },
    registerUser: {
      userName: null,
      name: null,
      lastname: null,
      email: null,
      secondEmail: null,
      password: null,
      image: null,
      personBio: null,
      secondPassword: null,
      favouriteGenre: [],
      favouriteFilm: null,
    },
    editUser: {
      userName: null,
      name: null,
      lastname: null,
      email: null,
      secondEmail: null,
      password: null,
      image: null,
      personBio: null,
      secondPassword: null,
      favouriteGenre: [],
      favouriteFilm: null,
    },
    film: {
      rating: null,
      comment: null,
    },
    search: {
      text: null,
    },
    filter: {
      genre: null,
      rating: null,
      actor: null,
      releaseDate: null,
      productionCountry: null,
      userSearch: [],
    },
  },
  data: {
    user: [
      {
        id: null,
        userName: null,
        name: null,
        lastname: null,
        email: null,
        secondEmail: null,
        password: null,
        image: null,
        personBio: "",
        favouriteGenre: [],
        favouriteFilm: null,
        following: [],
        followers: [],
      },
    ],
    films: [
      {
        id: null,
        title: null,
        year: null,
        movieCover: null,
        genre: null,
        rating: [],
        actor: [],
        director: [],
        description: "",
        countryOrigin: [],
      },
    ],

    genres: [
      "Fantasy",
      "Action",
      "Romantic Comedy",
      "Action and adventure",
      "Animation",
      "Comedy",
      "Drama",
      "Historical",
      "Horror",
      "Science fiction",
      "Western",
      "Thriller",
    ],

    years: [
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
    ],

    directors: [
      "Steven Spielberg",
      "Quentin Tarantino",
      "Cristoffer Nolan",
      "Tim Burton",
      "George Lucas",
      "Peter Jackson",
    ],

    actors: [
      "Harrison Ford",
      "Brad Pitt",
      "Jim Carrey",
      "Viggo Mortensen",
      "Christopher Lee",
      "Arnold Schwarzenegger",
    ],

    countryOrigin: [
      "Norway",
      "Sweden",
      "Denmark",
      "United Kingdom",
      "United States",
      "Germany",
    ],
  },
};
