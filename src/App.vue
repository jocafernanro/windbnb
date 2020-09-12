<template>
  <div id="app" class="container mx-auto p-4">
    <app-header @on-searchbar-click="isModalOpen = !isModalOpen"></app-header>
    <app-Stays></app-Stays>
    <app-footer></app-footer>
    <app-modal
      @on-close-modal="isModalOpen = false"
      v-click-outside="onClickOutsideModal"
      v-if="isModalOpen"
    ></app-modal>
  </div>
</template>

<script>
// Layout
import AppHeader from "@/components/layout/AppHeader";
import AppStays from "@/components/layout/AppStays";
import AppFooter from "@/components/layout/AppFooter";

// UI
import AppModal from "@/components/ui/AppModal";

// Directives
import vClickOutside from "v-click-outside";

export default {
  name: "App",
  components: {
    AppHeader,
    AppStays,
    AppFooter,
    AppModal
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    onClickOutsideModal() {
      if (this.isModalOpen) this.isModalOpen = false;
    }
  }
};
</script>

<style>
:root {
  --global-font-family: "Montserrat", "Helvetica Neue", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --global-font-size: 1rem;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
}
html,
body {
  font-family: var(--global-font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
