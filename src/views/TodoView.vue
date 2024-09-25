<script setup>
import { ref } from 'vue'

// выдаем всем todo уникальные id
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Изучить HTML' },
  { id: id++, text: 'Изучить JavaScript' },
  { id: id++, text: 'Изучить Vue' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
    <div class="todo">
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Добавить задачу</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</div>
</template>

<style>
  @media (min-width: 1024px) {
    .todo {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>