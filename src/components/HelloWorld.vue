<script setup>
import { ref } from "vue";

const props = defineProps({
  msg: { type: String, required: false, default: "Hello world!" },
  color: { type: String, required: false, default: "black" },
});

const count = ref(0);
</script>

<template>
  <h1 :style="{ color: `${props.color}` }">{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
