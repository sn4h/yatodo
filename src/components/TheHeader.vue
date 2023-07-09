<script>
import {useTaskStore} from "@/store/TaskStore";

export default {
  setup() {
    const taskStore = useTaskStore()

    return {
      taskStore
    }
  }
}
</script>

<template>
  <header class="header">
    <img class="header__img" src="../assets/pinia-logo.svg" alt="">
    <h1 class="header__heading">{{ taskStore.name }}</h1>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  background: #e7e7e7;
}

.header__img {
  max-width: 4rem;
  transform: rotate(-10deg);
}

.header__heading {
  margin: 0 1rem 0 0;
  padding-top: 1.5rem;
  transform: rotate(2deg);
  font-size: 2em;
  color: #777;
}
</style>