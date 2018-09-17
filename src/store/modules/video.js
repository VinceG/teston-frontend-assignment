/* eslint-disable */

const state = {
  playing: false,
  duration: 0,
  time: 0,
};

const getters = {
  playing: state => state.playing,
  duration: state => state.duration,
  time: state => state.time,
};

const actions = {};

const mutations = {
  setPlaying(state, value) {
    state.playing = value;
  },
  setDuration(state, value) {
    state.duration = value;
  },
  setTime(state, value) {
    state.time = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
