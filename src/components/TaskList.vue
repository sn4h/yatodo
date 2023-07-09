<script>

import TaskDetails from "@/components/TaskDetails.vue";
import {useTaskStore} from "@/store/TaskStore";
import {storeToRefs} from "pinia";

export default {
  components: {
    TaskDetails
  },
  setup() {
    const taskStore = useTaskStore()
    const {tasks, totalCount, favCount, favs, filter} = storeToRefs(taskStore)

    return {
      tasks,
      favs,
      totalCount,
      favCount,
      filter
    }
  }
}
</script>

<template>
  <section class="task-list" v-if="filter === 'all'">
    <p class="small center">You have a total of {{ totalCount }} tasks left todo!</p>
    <div v-for="task in tasks">
      <TaskDetails :task="task" />
    </div>
  </section>
  <section class="task-list" v-else>
    <p class="small center">You have {{ favCount }} tasks left todo!</p>
    <div v-for="task in favs">
      <TaskDetails :task="task" />
    </div>
  </section>
</template>

<style scoped>
.task-list {
  margin: 0.5rem 0 1.5rem;
}
</style>