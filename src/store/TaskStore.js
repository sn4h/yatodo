import {defineStore} from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    name: 'yatodo',
    tasks: [],
    isLoading: false,
    filter: 'all'
  }),
  getters: {
    favs() {
      return this.tasks.filter(task => task.isFav)
    },
    favCount() {
      return this.tasks.reduce((i, current) => {
        return current.isFav ? i + 1 : i
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    async getTasks() {
      this.isLoading = true

      const result = await fetch('http://localhost:3000/tasks')
      const data = await result.json()

      this.tasks = data
      this.isLoading = false
    },
    async addTask(task) {
      this.tasks.push(task)

      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'}
      })

      if (response.error) {
        console.log(response.error)
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter(target => {
        return target.id !== id
      })

      const response = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE'
      })

      if (response.error) {
        console.log(response.error)
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find(target => target.id === id)
      task.isFav = !task.isFav

      const response = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'PATCH',
        body: JSON.stringify({isFav: task.isFav}),
        headers: {'Content-Type': 'application/json'}
      })

      if (response.error) {
        console.log(response.error)
      }
    }
  }
})

