<template>
  <header class="sm:flex flex-row justify-between items-center my-4">
    <img src="images/logo.svg" alt="Windbnb logo" class="w-32 h-32" />
    <div
      @click="$emit('on-searchbar-click', $event.target.value)"
      class="flex flex-row rounded-xl shadow hover:shadow-lg"
    >
      <button class="rounded-l-xl pt-3 pb-2 px-4">
        <span>Helsinki, Findland</span>
      </button>
      <button
        class="border-l border-r border-gray-200 pt-3 pb-2 px-4 text-gray-400"
      >
        <span>Add guests</span>
      </button>
      <button class="rounded-r-xl pt-3 pb-2 px-3 flex flex-row items-center">
        <i class="material-icons text-lg text-red-400">search</i>
      </button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
