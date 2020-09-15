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
  },
  tmpFilter: {
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

    return stays
      .filter(stay => stay.maxGuests >= guestsFiltered())
      .filter(stay =>
        locationFiltered() ? state.filter.location === stay.city : true
      );
  },
  getLocations(state) {
    const locations = [...new Set(state.stays.map(stay => stay.city))];
    const locationFiltered = locations.filter(city => {
      return city
        .toLowerCase()
        .includes(state.tmpFilter.location.toLowerCase());
    });
    return state.tmpFilter.location.length === 0 ? locations : locationFiltered;
  },
  getLocation(state) {
    return state.filter.location;
  },
  getLocationFilter(state) {
    return state.tmpFilter.location;
  },
  getAdultsFilter(state) {
    return state.tmpFilter.guests.adults;
  },
  getChildrenFilter(state) {
    return state.tmpFilter.guests.children;
  },
  getBabiesFilter(state) {
    return state.tmpFilter.guests.babies;
  },
  getTotalGuests(state) {
    return sumGuests(state.filter.guests);
  },
  getTotalGuestsFilter(state) {
    return sumGuests(state.tmpFilter.guests);
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
  setLocationFilter({ commit }, location) {
    commit("setLocationFilter", location);
  },
  setGuestsFilter({ commit, state }, { guest, operation }) {
    const guestValue = state.tmpFilter.guests[guest];
    const result =
      operation === GUESTS.OPERATIONS.DECREASE
        ? decreaseValue(guestValue)
        : increaseValue(guestValue);
    commit("setGuestsFilter", { guest, result });
  },
  resetGuestsFilter({ commit }) {
    commit("resetGuestsFilter");
  },
  resetLocationFilter({ commit }) {
    commit("resetLocationFilter");
  },
  async setStaysFilter({ commit }) {
    await commit("setStaysFilter");
  }
};

const mutations = {
  populateStays(state) {
    state.stays = stays;
  },
  setLocationFilter(state, location) {
    state.tmpFilter.location = location;
  },
  setGuestsFilter(state, guestData) {
    state.tmpFilter.guests[guestData.guest] = guestData.result;
  },
  resetGuestsFilter(state) {
    Object.keys(state.tmpFilter.guests).forEach(guest => {
      state.tmpFilter.guests[guest] = 0;
    });
  },
  resetLocationFilter(state) {
    state.tmpFilter.location = "";
  },
  setStaysFilter(state) {
    state.filter = JSON.parse(JSON.stringify(state.tmpFilter));
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
