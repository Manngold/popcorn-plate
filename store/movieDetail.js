import axios from "axios";

export const state = () => ({
  movieDetail: {}
});

export const getters = {
  getMovieDetail: state => {
    return state.movieDetail;
  }
};

export const mutations = {
  setMovieDetail(state, detail) {
    state.movieDetail = detail;
  }
};

export const actions = {
  async fetchMovieDetail({ commit }, id) {
    const response = await axios.get(
      `${process.env.apiBaseUrl}/movie/${id}?api_key=${process.env.apiKey}`
    );
    if (response.status === 200) {
      commit("setMovieDetail", response.data);
    }
  }
};
