<template>
  <article clas="flex flex-col">
    <div class="object-cover">
      <img :src="image" alt="" class="rounded-xl object-cover w-full h-xl" />
    </div>
    <div class="flex flex-row justify-between mt-4 mb-2 items-center">
      <div class="text-gray-600">
        <span
          v-if="superHost"
          class="rounded-xl border border-gray-700 text-gray-700 text-sm font-bold px-3 py-1 mr-3"
          >SUPER HOST</span
        >
        <span>{{ type }}</span
        ><span v-if="beds">{{ totalBeds }}</span>
      </div>

      <div class="flex flex-row justify-center items-center">
        <i class="material-icons mr-2 text-2xl text-red-400">grade</i>
        <span class="text-lg">{{ rating }}</span>
      </div>
    </div>
    <span class="text-lg">{{ title }}</span>
  </article>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    superHost: Boolean,
    type: String,
    beds: Number,
    rating: Number
  },
  computed: {
    totalBeds() {
      return this.beds && ` . ${this.beds} beds`;
    }
  }
};
</script>

<style></style>
