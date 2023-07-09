<script>
import {useTaskStore} from "@/store/TaskStore";
import {storeToRefs} from "pinia";

export default {
  setup() {
    const taskStore = useTaskStore()
    const {filter} = storeToRefs(taskStore)

    return {
      filter
    }
  }
}
</script>

<template>
  <nav class="filter">
    <button @click.prevent="filter = 'all'">
      All tasks
    </button>
    <button @click.prevent="filter = 'favorite'">
      Favorites
    </button>
  </nav>
</template>

<style scoped>
@media screen and (max-width: 29rem) {
  .filter {
    display: flex;
    justify-content: center;
  }
}
</style>