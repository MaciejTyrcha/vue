<script setup>
import { ref } from "vue";
  import Form from "@/components/Form.vue";
  import Modal from "@/components/Modal.vue";
  import {formDef1, formDef2} from "@/defs/components.js";

  import { useUserStore } from "@/stores/user.js";
  const userStore = useUserStore();

  const secondSubmit = (data) => {
    userStore.addUser(data);
  }




  const isModalOpen = ref(false);


</script>

<template>
  <div id="wrapper">
    <div class="formExample">
      <h1>First form -> This not work</h1>
      <Form
        :content = "formDef1.content"
        :Submit = "formDef1.Submit"
      />
      <h1>Second form -> This works</h1>
      <Form
        :content = "formDef2.content"
        :Submit = "secondSubmit"
      />
      <h2>User list</h2>
      <div class="userList">
        <div
          class="userElement"
          v-for="item in userStore.users"
        >
          Name: {{ item.name }} Surname: {{item.surname}}
        </div>
      </div>
    </div>
    <div class="popupExample">
      <button @click.prevent="isModalOpen = true">Open modal</button>
      <Modal :isModalOpen="isModalOpen" @close="isModalOpen = false" />
    </div>
  </div>
</template>

<style scoped>
  #wrapper {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  .formExample {
    border-right: 1px solid black;
    flex: 1;
  }

  .popupExample {
    flex: 1;
  }

  .userElement {
    background-color: aliceblue;
    height: 20px;
    border-bottom: 1px solid black;
  }

  .popup {
    position: absolute;
    top: 50%;
    right: 300px;
    height: 200px;
    width: 200px;
    background-color: red;
  }

  .popup:focus {
    border: 5px solid blue;
  }


</style>
