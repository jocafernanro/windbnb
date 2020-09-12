<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50">
    <div class="bg-white">
      <div class="container mx-auto p-2">
        <div class="search-bar flex flex-row border border-gray-400 rounded-xl">
          <button class="search-bar-item w-1/3" id="search-bar-item-1">
            <span class="text-2xs font-bold">LOCATION</span>
            <span class="text-xs">Helsinki, Finland</span>
            <stays-selector></stays-selector>
          </button>
          <button class="search-bar-item w-1/3" id="search-bar-item-2">
            <span class="text-2xs font-bold">GUESTS</span>
            <span class="text-xs">Add guests</span>
            <stays-guests-selector></stays-guests-selector>
          </button>
          <div class="w-1/3 p-2 boder-r border-gray-400 text-right">
            <button
              class="bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm rounded-md py-3 px-4"
            >
              <span class="flex flex-row justify-center items-center">
                <i class="material-icons text-lg mr-1">search</i> Buscar
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
import StaysSelector from "@/components/stays/StaysSelector";
import StaysGuestsSelector from "@/components/stays/StaysGuestsSelector";
export default {
  components: {
    StaysSelector,
    StaysGuestsSelector
  }
};
</script>

<style scoped>
.search-bar-item {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply relative;
  @apply p-2;
}

.search-bar-item:hover {
  @apply rounded-xl;
  @apply border-2;
  @apply border-gray-500;
}

#search-bar-item-1:hover ~ #search-bar-item-2 {
  @apply border-l-0;
}

#search-bar-item-2 {
  @apply border-r;
  @apply border-l;
}

#search-bar-item-2:hover {
  @apply rounded-xl;
  @apply border-2;
  @apply border-gray-500;
}
</style>
