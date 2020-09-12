import stays from "@/data/stays.json";

const state = () => ({
  stays: []
});

const getters = {
  getStaysByFiler({ country, guests } = {}) {
    console.log({ country, guests });
  }
};

const actions = {
  populateStays({ commit }) {
    commit("populateStays");
  }
};

const mutations = {
  populateStays(state) {
    state.stays = stays;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
