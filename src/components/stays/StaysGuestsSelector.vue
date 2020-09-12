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
            <i class="material-icons p-1 border border-gray-200 rounded-full"
              >remove</i
            >
            <span class="m-2">0</span>
            <i class="material-icons p-1 border border-gray-200 rounded-full"
              >add</i
            ></span
          >
        </div>
      </li>

      <!-- Childrens -->
      <li
        class="flex flex-row justify-between items-center py-3 border-t border-b border-gray-200"
      >
        <div class="flex flex-col text-left">
          <span class="text-md">Children</span>
          <span class="text-xs text-gray-500">Ages to 2 to 12</span>
        </div>
        <div>
          <span class="flex flex-row items-center">
            <i class="material-icons p-1 border border-gray-200 rounded-full"
              >remove</i
            >
            <span class="m-2">0</span>
            <i class="material-icons p-1 border border-gray-200 rounded-full"
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
            <i class="material-icons p-1 border border-gray-200 rounded-full"
              >remove</i
            >
            <span class="m-2">0</span>
            <i class="material-icons p-1 border border-gray-200 rounded-full"
              >add</i
            ></span
          >
        </div>
      </li>
    </ul>
  </app-base-selector>
</template>

<script>
import AppBaseSelector from "@/components/ui/AppBaseSelector";
export default {
  components: {
    AppBaseSelector
  }
};
</script>

<style></style>
