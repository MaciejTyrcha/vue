// import { useUserStore } from "@/stores/user.js";
// const userStore = useUserStore();

export const formDef1 = {
  Submit(data) {
    console.log(data);
    console.log('Submit 1!');
    // userStore.addUser(data);
  },
  content: [
    {
      type: "text",
      label: 'Name',
      placeholder: "Name",
      prefix: 'name',
    },
    {
      type: "text",
      label: 'Surname',
      placeholder: "Surname",
      prefix: 'surname',
    },
  ]
}

export const formDef2 = {
  Submit() {
    console.log('Submit 2!');
  },
  content: [
    {
      type: "text",
      label: 'Name',
      placeholder: "Name",
      prefix: 'name',
    },
    {
      type: "text",
      label: 'Surname',
      placeholder: "Surname",
      prefix: 'surname',
    },
  ]
}