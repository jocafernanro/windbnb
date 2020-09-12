<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 mt-16 bg-black bg-opacity-50">
    <div class="bg-white">
      <div class="container mx-auto p-2 relative">
        <i
          @click="$emit('on-close-modal')"
          class="material-icons absolute right-0 top-0 -mt-12 p-2 cursor-pointer"
          >close</i
        >
        <div class="flex flex-row border border-gray-400 rounded-xl">
          <button
            v-click-outside="onClickOutsideLocationsSelector"
            @click.prevent="toggleModal(modal.locations)"
            class="search-bar-item w-5/12 no-outline"
            id="search-bar-item-1"
          >
            <span class="text-2xs font-bold">LOCATION</span>
            <span class="text-xs">Helsinki, Finland</span>
            <stays-locations-selector
              v-if="isLocationsSelectorOpen"
            ></stays-locations-selector>
            <i
              v-if="isLocationsSelectorOpen"
              class="material-icons absolute text-sm bg-gray-300 hover:bg-gray-400 rounded-full p-1 right-0 mr-4 cursor-pointer"
              >close</i
            >
          </button>
          <button
            v-click-outside="onClickOutsideGuestsSelector"
            @click.prevent="toggleModal(modal.guests)"
            class="search-bar-item w-5/12 no-outline"
            id="search-bar-item-2"
          >
            <span class="text-2xs font-bold">GUESTS</span>
            <span class="text-xs">Add guests</span>
            <stays-guests-selector
              v-if="isGuestsSelectorOpen"
            ></stays-guests-selector>
            <i
              v-if="isGuestsSelectorOpen"
              class="material-icons absolute text-sm bg-gray-300 hover:bg-gray-400 rounded-full p-1 right-0 mr-4 cursor-pointer"
              >close</i
            >
          </button>
          <div class="w-2/12 p-2 boder-r border-gray-400 text-right">
            <button
              @click="filterStays"
              class="bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm rounded-md py-3 px-4"
            >
              <span class="flex flex-row justify-center items-center">
                <i class="material-icons text-lg mr-1">search</i> Search
              </span>
            </button>
          </div>
        </div>
        <div class="h-3xl"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import StaysLocationsSelector from "@/components/stays/StaysLocationsSelector";
import StaysGuestsSelector from "@/components/stays/StaysGuestsSelector";
import vClickOutside from "v-click-outside";

export default {
  components: {
    StaysLocationsSelector,
    StaysGuestsSelector
  },
  directives: {
    clickOutside: vClickOutside.directive
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
  methods: {
    ...mapActions("stays", ["setStaysFilter"]),
    toggleModal(modal) {
      switch (modal) {
        case this.modal.locations:
          this.isLocationsSelectorOpen = !this.isLocationsSelectorOpen;
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
