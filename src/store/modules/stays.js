import stays from "@/data/stays.json";
import { GUESTS } from "@/data/CONSTANTS";

const decreaseValue = value => (value > 0 ? --value : 0);
const increaseValue = value => ++value;
const sumGuests = guests =>
  Object.values(guests).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

const state = () => ({
  stays: [],
  filter: {
    location: "",
    guests: {
      adults: 0,
      children: 0,
      babies: 0
    }
  }
});

const getters = {
  getStaysByFiler(state) {
    const guestsFiltered = () => sumGuests(state.filter.guests);
    const locationFiltered = () => state.filter.location.length > 0;

    console.log({ guestsFiltered, locationFiltered, stays });

    return stays
      .filter(stay => stay.maxGuests >= guestsFiltered())
      .filter(stay =>
        locationFiltered() ? state.filter.location === stay.city : true
      );
  },
  getLocations(state) {
    return [...new Set(state.stays.map(location => location.city))];
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
  getTotalGuests(state) {
    return sumGuests(state.filter.guests);
  },
  getGuestsFormatted(state, getters) {
    const guests = getters.getTotalGuests;
    return guests && guests > 0
      ? `${guests} Guest${guests > 1 ? "s" : ""}`
      : "Add guests";
  },
  getLocationFormatted(state, getters) {
    const location = getters.getLocation;
    return location && location.length > 0
      ? `${location}, Finland`
      : "Where do you travel?";
  }
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
    const guestValue = state.filter.guests[guest];
    const result =
      operation === GUESTS.OPERATIONS.DECREASE
        ? decreaseValue(guestValue)
        : increaseValue(guestValue);
    commit("setGuestsFilter", { guest, result });
  },
  resetGuestsFilter({ commit }) {
    commit("resetGuestsFilter");
  }
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
  setGuestsFilter(state, guestData) {
    state.filter.guests[guestData.guest] = guestData.result;
  },
  resetGuestsFilter(state) {
    Object.keys(state.filter.guests).forEach(guest => {
      state.filter.guests[guest] = 0;
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
