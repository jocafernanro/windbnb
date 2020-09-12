import stays from "@/data/stays.json";

const state = () => ({
  stays: [],
  filter: {
    location: "",
    guests: {
      adults: 0,
      children: 0,
      babies: 0,
    },
  },
});

const getters = {
  getStaysByFiler(state) {
    return state.stays;
  },
  getLocations(state) {
    return [...new Set(state.stays.map((location) => location.city))];
  },
  getLocation(state) {
    return state.filter.location;
  },
  getAdults(state) {
    return state.filter.guests.adults;
  },
  getChildren(state) {
    return state.filter.guests.children;
  },
  getBabies(state) {
    return state.filter.guests.babies;
  },
};

const actions = {
  populateStays({ commit }) {
    commit("populateStays");
  },
  setFilter({ commit }, filter) {
    commit("setFilter", filter);
  },
  setLocationFilter({ commit }, location) {
    commit("setLocationFilter", location);
  },
  setGuestsFilter({ commit, state }, { guest, operation }) {
    const filter = { ...state.filter.guests[guest] };
    console.log(operation), console.log(filter);
    commit("setGuestsFilter");
  },
};

const mutations = {
  populateStays(state) {
    state.stays = stays;
  },
  setLocationFilter(state, location) {
    state.filter.location = location;
  },
  setFilter(state, filter) {
    state.filter = filter;
  },
  setGuestsFilter() {},
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
