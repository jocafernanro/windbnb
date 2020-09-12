<template>
  <section class="my-12">
    <div class="flex flex-row justify-between items-center mb-6">
      <h1 class="font-bold text-4xl">Stays in Finland</h1>
      <span class="text-sm">12+ Stays</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      <stays-card
        v-for="(stay, index) in stays"
        :key="index"
        :superHost="stay.superHost"
        :rating="stay.rating"
        :title="stay.title"
        :beds="stay.beds"
        :image="stay.photo"
        :type="stay.type"
      ></stays-card>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import StaysCard from "@/components/stays/StaysCard";

export default {
  components: {
    StaysCard
  },
  computed: {
    ...mapGetters("stays", {
      stays: "stays"
    })
  },
  methods: mapActions("stays", ["populateStays"]),
  mounted() {
    this.populateStays();
  }
};
</script>

<style></style>
