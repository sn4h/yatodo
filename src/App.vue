<script>
import {useTaskStore} from "@/store/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";
import TaskFilter from "@/components/TaskFilter.vue";
import TheMain from "@/components/TheMain.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheMain,
    TaskFilter,
    TaskList,
    TaskForm,
    TaskDetails
  },
  setup() {
    const taskStore = useTaskStore()
    taskStore.getTasks()

    return {
      taskStore
    }
  }
}
</script>
<template>
    <TheHeader/>
    <TheMain>
        <div class="loading" v-if="taskStore.isLoading">Loading...</div>
        <div v-else>
            <div class="form">
                <TaskForm/>
                <TaskFilter/>
            </div>
            <TaskList/>
            <button @click="taskStore.$reset()">
                Reset list
            </button>
        </div>
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
</style>