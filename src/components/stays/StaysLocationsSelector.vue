<template>
  <app-base-selector>
    <ul>
      <li
        @click="setLocationFilter(location)"
        v-for="(location, index) in locations"
        :key="index"
        class="p-2 hover:bg-gray-200 rounded-xl"
      >
        <span class="flex flex-row items-center">
          <i
            class="material-icons p-3 bg-gray-200 rounded-xl border-2 border-gray-400 mr-4"
            >place</i
          >
          {{ location }}, Finland
        </span>
      </li>
    </ul>
  </app-base-selector>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppBaseSelector from "@/components/ui/AppBaseSelector";
export default {
  components: {
    AppBaseSelector
  },
  computed: {
    ...mapGetters("stays", {
      locations: "getLocations"
    })
  },
  methods: {
    ...mapActions("stays", ["setLocationFilter"])
  }
};
</script>

<style></style>
