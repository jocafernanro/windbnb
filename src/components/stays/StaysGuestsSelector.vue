<template>
  <app-base-selector>
    <ul>
      <!-- Adults -->
      <li class="flex flex-row justify-between items-center pb-3">
        <div class="flex flex-col text-left">
          <span class="text-md">Adults</span>
          <span class="text-xs text-gray-500">Ages 13 or above</span>
        </div>
        <div>
          <span class="flex flex-row items-center">
            <i
              @click="
                setGuestsFilter({
                  guest: GUESTS.ADULTS,
                  operation: GUESTS.OPERATIONS.DECREASE
                })
              "
              class="material-icons p-1 border border-gray-200 hover:border-black rounded-full"
              >remove</i
            >
            <span class="m-2">{{ adults }}</span>
            <i
              @click="
                setGuestsFilter({
                  guest: GUESTS.ADULTS,
                  operation: GUESTS.OPERATIONS.INCREASE
                })
              "
              class="material-icons p-1 border border-gray-200 hover:border-black rounded-full"
              >add</i
            ></span
          >
        </div>
      </li>

      <!-- Children -->
      <li
        class="flex flex-row justify-between items-center py-3 border-t border-b border-gray-200"
      >
        <div class="flex flex-col text-left">
          <span class="text-md">Children</span>
          <span class="text-xs text-gray-500">Ages to 2 to 12</span>
        </div>
        <div>
          <span class="flex flex-row items-center">
            <i
              @click="
                setGuestsFilter({
                  guest: GUESTS.CHILDREN,
                  operation: GUESTS.OPERATIONS.DECREASE
                })
              "
              class="material-icons p-1 border border-gray-200 hover:border-black rounded-full"
              >remove</i
            >
            <span class="m-2">{{ children }}</span>
            <i
              @click="
                setGuestsFilter({
                  guest: GUESTS.CHILDREN,
                  operation: GUESTS.OPERATIONS.INCREASE
                })
              "
              class="material-icons p-1 border border-gray-200 hover:border-black rounded-full"
              >add</i
            ></span
          >
        </div>
      </li>

      <!-- Babies -->
      <li class="flex flex-row justify-between items-center pt-3">
        <div class="flex flex-col text-left">
          <span class="text-md">Babies</span>
          <span class="text-xs text-gray-500">Ages under 2</span>
        </div>
        <div>
          <span class="flex flex-row items-center">
            <i
              @click="
                setGuestsFilter({
                  guest: GUESTS.BABIES,
                  operation: GUESTS.OPERATIONS.DECREASE
                })
              "
              class="material-icons p-1 border border-gray-200 hover:border-black rounded-full"
              >remove</i
            >
            <span class="m-2">{{ babies }}</span>
            <i
              @click="
                setGuestsFilter({
                  guest: GUESTS.BABIES,
                  operation: GUESTS.OPERATIONS.INCREASE
                })
              "
              class="material-icons p-1 border border-gray-200 hover:border-black rounded-full"
              >add</i
            ></span
          >
        </div>
      </li>
    </ul>
  </app-base-selector>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppBaseSelector from "@/components/ui/AppBaseSelector";
import { GUESTS } from "@/data/CONSTANTS";

export default {
  components: {
    AppBaseSelector
  },
  data() {
    return {
      GUESTS: GUESTS
    };
  },
  computed: {
    ...mapGetters("stays", {
      adults: "getAdultsFilter",
      children: "getChildrenFilter",
      babies: "getBabiesFilter"
    })
  },
  methods: {
    ...mapActions("stays", ["setGuestsFilter"])
  }
};
</script>

<style></style>
