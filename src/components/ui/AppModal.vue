<template>
  <div
    @click.self="$emit('on-close-modal')"
    class="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50"
  >
    <div class="bg-white pt-16">
      <transition name="slide-top">
        <div class="container mx-auto p-2 relative">
          <i
            @click="$emit('on-close-modal')"
            class="material-icons absolute right-0 top-0 -mt-12 p-2 cursor-pointer"
            >close</i
          >
          <div
            class="flex flex-col sm:flex-row border border-gray-400 rounded-xl"
          >
            <button
              v-click-outside="onClickOutsideLocationsSelector"
              :class="locationSelectorFocusStyle"
              @click.self="toggleModal(modal.locations)"
              class="search-bar-item w-full sm:w-5/12 no-outline"
              id="search-bar-item-1"
            >
              <span class="text-2xs font-bold">LOCATION</span>
              <input
                autocomplete="off"
                id="location"
                @click.self="isLocationsSelectorOpen = true"
                class="no-outline text-xs bg-white bg-opacity-0"
                type="text"
                placeholder="Where do you travel?"
                v-model="locationFilter"
              />
              <stays-locations-selector
                v-if="isLocationsSelectorOpen"
              ></stays-locations-selector>
              <i
                v-if="isLocationsSelectorOpen"
                @click="resetLocationFilter"
                class="material-icons absolute text-sm bg-gray-300 hover:bg-gray-400 rounded-full p-1 right-0 mr-4 cursor-pointer"
                >close</i
              >
            </button>
            <button
              v-click-outside="onClickOutsideGuestsSelector"
              @click.self="toggleModal(modal.guests)"
              class="search-bar-item w-full sm:w-5/12 no-outline"
              :class="isLocationsSelectorOpen && 'border-white'"
              id="search-bar-item-2"
            >
              <span class="text-2xs font-bold">GUESTS</span>
              <span class="text-xs">{{ guests }}</span>
              <stays-guests-selector
                v-if="isGuestsSelectorOpen"
              ></stays-guests-selector>
              <i
                @click="resetGuestsFilter"
                v-if="isGuestsSelectorOpen"
                class="material-icons absolute text-sm bg-gray-300 hover:bg-gray-400 rounded-full p-1 right-0 mr-4 cursor-pointer"
                >close</i
              >
            </button>
            <div
              class="hidden sm:inline-block sm:w-2/12 p-2 boder-r border-gray-400 text-right"
            >
              <button
                @click="search"
                class="bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm rounded-md py-3 px-4"
              >
                <span class="flex flex-row justify-center items-center">
                  <i class="material-icons text-lg mr-1">search</i> Search
                </span>
              </button>
            </div>
          </div>
          <div class="h-3xl flex flex-row justify-center items-end mb-4">
            <button
              @click="search"
              class="block sm:hidden bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm rounded-md py-3 px-4"
            >
              <span class="flex flex-row justify-center items-center">
                <i class="material-icons text-lg mr-1">search</i> Search
              </span>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import StaysLocationsSelector from "@/components/stays/StaysLocationsSelector";
import StaysGuestsSelector from "@/components/stays/StaysGuestsSelector";
import { locationFormatted, guestsFormatted } from "@/utils";

export default {
  components: {
    StaysLocationsSelector,
    StaysGuestsSelector
  },
  data() {
    return {
      modal: {
        locations: "locations",
        guests: "guests"
      },
      isLocationsSelectorOpen: false,
      isGuestsSelectorOpen: false
    };
  },
  computed: {
    ...mapGetters("stays", {
      // locationFilter: "getLocationFilter",
      guestFilter: "getTotalGuestsFilter"
    }),
    locationFilter: {
      get() {
        return this.$store.getters["stays/getLocationFilter"];
      },
      set(value) {
        this.$store.commit("stays/setLocationFilter", value);
      }
    },
    location() {
      return locationFormatted(this.locationFilter);
    },
    guests() {
      return guestsFormatted(this.guestFilter);
    },
    locationSelectorFocusStyle() {
      return (
        this.isLocationsSelectorOpen &&
        "rounded-xl border-2 border-black bg-gray-100"
      );
    }
  },
  methods: {
    ...mapActions("stays", [
      "setStaysFilter",
      "resetLocationFilter",
      "resetGuestsFilter"
    ]),
    async search() {
      await this.setStaysFilter();
      this.$emit("on-close-modal");
    },
    toggleModal(modal) {
      switch (modal) {
        case this.modal.locations:
          this.isLocationsSelectorOpen = !this.isLocationsSelectorOpen;
          document.querySelector("#location").focus();
          break;
        case this.modal.guests:
          this.isGuestsSelectorOpen = !this.isGuestsSelectorOpen;
          break;
        default:
          break;
      }
    },
    onClickOutsideGuestsSelector() {
      if (this.isGuestsSelectorOpen) this.isGuestsSelectorOpen = false;
    },
    onClickOutsideLocationsSelector() {
      if (this.isLocationsSelectorOpen) this.isLocationsSelectorOpen = false;
    }
  }
};
</script>

<style scoped>
.search-bar-item {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply relative;
  @apply pt-3;
  @apply pb-2;
  @apply px-4;
}

.search-bar-item:focus {
  @apply rounded-xl;
  @apply border-2;
  @apply border-black;
  @apply bg-gray-100;
}

.search-bar-item:hover {
  @apply rounded-xl;
  @apply border-2;
  @apply border-gray-500;
}

#search-bar-item-1:hover ~ #search-bar-item-2 {
  @apply border-white;
}
#search-bar-item-2 {
  @apply border-l;
}

#search-bar-item-2:hover {
  @apply rounded-xl;
  @apply border-2;
  @apply border-gray-500;
}

.no-outline:focus {
  outline: 0;
}
</style>
