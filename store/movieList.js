export const state = () => ({
  nowPlaying: [],
  topRated: [],
  upcoming: [],
  recommendations: [],
  popular: []
});

export const getters = {
  getNowPlaying: state => () => {
    return state.nowPlaying;
  },
  getTopRated: state => () => {
    return state.topRated;
  },
  getUpcoming: state => () => {
    return state.upcoming;
  },
  getRecommendations: state => () => {
    return state.recommendations;
  },
  getPopular: state => () => {
    return state.popular;
  }
};

export const mutations = {
  setNowPlaying(state, movies) {
    state.nowPlaying = [...movies];
  },
  setTopRated(state, movies) {
    state.topRated = [...movies];
  },
  setUpcoming(state, movies) {
    state.upcoming = [...movies];
  },
  setRecommendations(state, movies) {
    state.recommendations = [...movies];
  },
  setPopular(state, moiveInfo) {
    const { cardAmount, movies } = moiveInfo;
    for (const movie of movies) {
      if (state.popular.length === cardAmount) break;
      state.popular.push(movie);
    }
  }
};
