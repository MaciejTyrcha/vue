import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const users = ref([]);

  function addUser(user) {
    users.value.push(user);
  }

  return { users, addUser}
})
