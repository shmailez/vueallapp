<script setup>
    import { ref } from 'vue'

    const awesome = ref(true)

    function toggle() {
    awesome.value = !awesome.value
    }
</script>


<template>
    <div class="toggler">
      <h1>This is page for  toggler</h1>
      <button @click="toggle">Нажать</button>
        <h1 v-if="awesome">Не нажимай</h1>
        <h1 v-else>Зачем нажал?</h1>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .toggler {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>