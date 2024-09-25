<script setup>
    import { ref } from 'vue'

    const text = ref('')

    function onInput(e) {
    text.value = e.target.value
    }
</script>


<template>
    <div class="form">
      <h1>This is an FORM PAGE</h1>
        <input :value="text" @input="onInput" placeholder="Пишите тут">
        <p>{{ text }}</p>
    </div>
</template>
  
<style>
  @media (min-width: 1024px) {
    .from {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>