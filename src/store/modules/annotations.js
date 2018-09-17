/* eslint-disable */

const state = {
    rows: []
};

const getters = {
    rows: state => state.rows,
    // Figure out the closes next annotation from the current time
    next: (state, getters, rootState) => () => {
        let time = rootState.video.time;

        if(!time || !rootState.video.duration) {
            return false;
        }

        // if we have no annotations quit
        if(!state.rows.length) {
            return false;
        }

        let next = false;

        // Find the next annotation in line based on time
        state.rows.forEach(row => {
            if(!next && row.time > time) {
                next = row;
                return;
            }
        });

        return next;
    }
};

const actions = {
    addAnnotation({commit}, payload) {
        commit('ADD_ANNOTATION', payload);
    }
};

const mutations = {
    ADD_ANNOTATION(state, payload) {
        state.rows.push(payload);
    }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
