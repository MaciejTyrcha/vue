import { useUserStore } from "@/stores/user.js";


export const formDef1 = {
  Submit(data) {
    const userStore = useUserStore();
    userStore.addUser(data);
  },
  content: [
    {
      type: "text",
      label: 'Name',
      placeholder: "Name",
      name: 'name',
      value: "",
      default: "",
    },
    {
      type: "text",
      label: 'Surname',
      placeholder: "Surname",
      name: 'surname',
      value: "",
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