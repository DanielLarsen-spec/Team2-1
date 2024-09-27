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
        countryOrigin: null,
        }],
  },
};










