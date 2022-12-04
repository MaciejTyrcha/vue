<script setup>
import {$ref} from "vue/macros";
import Input from "@/components/Input.vue";

const props = defineProps({
  content: Array,
  Submit: Function,
});

//Object, which helds default values of data
const formDefaults = $ref(props.content.reduce((o, key) => Object.assign(o, {[key.name]: key.default}), {}));
//Object of data values
const formData = $ref(props.content.reduce((o, key) => Object.assign(o, {[key.name]: key.value}), {}));

const OnSubmit = () => {
  props.Submit && props.Submit(formData);
  resetData();
}

const resetData = () => {
  for (const [key, value] of Object.entries(formDefaults)) {
    formData[key] = "";
  }
}


const updateData = (data) => {
  const {name, value} = data;
  formData[name] = value;
}

</script>
<template>
  <form @submit.prevent="">
    <Input
        v-for="item in content"
        :value="formData[item.name]"
        :placeholder="item.placeholder"
        :label="item.label"
        :type="item.type"
        :name="item.name"
        @updateData="updateData"
    />
    <div class="submitBtn" @click="OnSubmit">
      Submit
    </div>
  </form>
</template>



<style scoped>
  .submitBtn {
    display: inline-block;
    padding: 10px 30px;
    background-color: blue;
    color: white;
    cursor: pointer;
  }



</style>