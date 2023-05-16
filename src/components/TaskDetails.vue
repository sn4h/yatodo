<script>
import {useTaskStore} from "@/store/TaskStore";

export default {
  props: [
    'task'
  ],
  setup() {
    const taskStore = useTaskStore()

    return {
      taskStore
    }
  }
}
</script>

<template>
    <div class="task">
        <h3 class="task__heading">{{ task.title }}</h3>
        <div class="task__icons">
            <i
                @click="taskStore.deleteTask(task.id)"
                class="material-icons"
            >
                delete
            </i>
            <i
                @click="taskStore.toggleFav(task.id)"
                class="material-icons"
                :class="{active: task.isFav }">
                favorite
            </i>
        </div>
    </div>
</template>

<style scoped>
.task {
  padding: 0.45rem 1.25rem;
  background: #fffff1;
  margin: 1.25rem 0 0;
  border-radius: 0.25rem;
  box-shadow: 0.124rem 0.25rem 0.124rem rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task__heading,
.task__icons {
  display: inline-block;
}

.task__icons {
  text-align: right;
  cursor: pointer;
  color: #bbbbbb;
  margin-left: 1rem;
}

.task__icons i {
  padding: 0 0.25rem;
}

.task__icons .active {
  color: red;
}
</style>