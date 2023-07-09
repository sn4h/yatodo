<script setup>
import {useTaskStore} from "@/store/TaskStore";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";
import TaskFilter from "@/components/TaskFilter.vue";
import TheMain from "@/components/TheMain.vue";
import TheHeader from "@/components/TheHeader.vue";
import {ref} from "vue";

const taskStore = useTaskStore()
taskStore.getTasks()

const toggle = ref(false)

</script>
<template>
  <TheHeader />
  <TheMain>
    <div class="loading" v-if="taskStore.isLoading">Loading...</div>
    <div v-else>
      <div class="form">
        <TaskForm />
        <TaskFilter />
      </div>
      <TaskList />
      <button @click="taskStore.$reset()">
        Reset list
      </button>
    </div>
    <transition name="fade">
      <div v-if="toggle">
        Toggled
      </div>
    </transition>
    <button @click="toggle = !toggle">
      Toggle
    </button>
  </TheMain>
</template>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 29rem) {
  .form {
    display: block;
  }
}

.fade-enter-from {
  opacity: 0;
  scaleX: 0;
  scaleY: 0;
}

.fade-enter-to {

  opacity: 1;
  scaleX: 1;
  scaleY: 1;
}

.fade-enter-active {
  transition: opacity 3s
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 1s
}
</style>