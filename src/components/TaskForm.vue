<script>
import {useTaskStore} from "@/store/TaskStore";
import {ref} from "vue";

export default {
  setup() {
    const taskStore = useTaskStore()
    const newTask = ref('')

    const onSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 1000000) // poor man's hash
        })
        newTask.value = ''
      }
    }
    return {
      onSubmit,
      newTask
    }
  }
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <input
            type="text"
            placeholder="I need to..."
            v-model="newTask"
        >
        <button type="submit">Add</button>
    </form>
</template>

<style scoped>

@media screen and (max-width: 29rem) {
    form {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }
}
</style>