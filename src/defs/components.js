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
      name: 'name',
      default: "",
    },
    {
      type: "text",
      label: 'Surname',
      placeholder: "Surname",
      name: 'surname',
      default: "",
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
      name: 'name',
      value: "maciej",
      default: "",
    },
    {
      type: "text",
      label: 'Surname',
      placeholder: "Surname",
      name: 'surname',
      value: "tyrcha",
      default: "",
    },
  ]
}