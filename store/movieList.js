import axios from "axios";
export const state = () => ({
  nowPlaying: { page: 0, movies: [] },
  topRated: { page: 0, movies: [] },
  upcoming: { page: 0, movies: [] },
  recommendations: { page: 0, movies: [] },
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
  setPage(state, target) {
    if (state[target].page === 100) return;
    state[target].page += 1;
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
  async fetchNowPlaying({ state, commit }) {
    commit("setPage", "nowPlaying");
    const {
      nowPlaying: { page }
    } = state;
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/now_playing?page=${page}&api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setNowPlaying", response.data.results);
    }
  },
  async fetchTopRated({ state, commit }) {
    commit("setPage", "topRated");
    const {
      topRated: { page }
    } = state;
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/top_rated?page=${page}&api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setTopRated", response.data.results);
    }
  },
  async fetchUpcoming({ state, commit }) {
    commit("setPage", "upcoming");
    const {
      upcoming: { page }
    } = state;
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/upcoming?page=${page}&api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setUpcoming", response.data.results);
    }
  },
  async fetchRecommendations({ state, commit }, id) {
    commit("setPage", "recommendations");
    const {
      recommendations: { page }
    } = state;
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
