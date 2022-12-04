import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const users = ref([]);

  function addUser(user) {
    console.log("STORE: ", user);
    users.value.push({...user});
  }

  return { users, addUser}
})
