import axios from "axios";
export const state = () => ({
  nowPlaying: { page: 1, movies: [] },
  topRated: { page: 1, movies: [] },
  upcoming: { page: 1, movies: [] },
  recommendations: { page: 1, movies: [] },
  popular: []
});

export const getters = {
  getNowPlaying: state => {
    return state.nowPlaying;
  },
  getTopRated: state => {
    return state.topRated;
  },
  getUpcoming: state => {
    return state.upcoming;
  },
  getRecommendations: state => {
    return state.recommendations;
  },
  getPopular: state => {
    return state.popular;
  }
};

export const mutations = {
  setNowPlaying(state, movies) {
    state.nowPlaying.movies = [...state.nowPlaying.movies, ...movies];
  },
  setTopRated(state, movies) {
    state.topRated.movies = [...state.topRated.movies, ...movies];
  },
  setUpcoming(state, movies) {
    state.upcoming.movies = [...state.upcoming.movies, ...movies];
  },
  setRecommendations(state, movies) {
    state.recommendations.movies = [...state.recommendations.movies, ...movies];
  },
  setPopular(state, movieInfo) {
    const { cardAmount, movies } = movieInfo;
    for (const movie of movies) {
      if (state.popular.length === cardAmount) break;
      state.popular.push(movie);
    }
  }
};

export const actions = {
  async fetchNowPlaying({ commit }, page) {
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/now_playing?page=${page}&api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setNowPlaying", response.data.results);
    }
  },
  async fetchTopRated({ commit }, page) {
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/top_rated?page=${page}&api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setTopRated", response.data.results);
    }
  },
  async fetchUpcoming({ commit }, page) {
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/upcoming?page=${page}&api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setUpcoming", response.data.results);
    }
  },
  async fetchRecommendations({ commit, state }, id) {
    const page = state.recommendations.page;
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/${id}/recommendations?page=${page}&api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setRecommendations", response.data.results);
    }
  },
  async fetchPopular({ commit }, cardAmount) {
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/popular?api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setPopular", { movies: response.data.results, cardAmount });
    }
  }
};
