<script setup>
import {$ref} from "vue/macros";
import Input from "@/components/Input.vue";

const props = defineProps({
  content: Array,
  Submit: Function,
});

let data = $ref({});
const OnSubmit = () => {
  props.Submit && props.Submit(data);
  data = {};
}

const updateFormData = inputData => {
  const {prefix, value} = inputData;
  data[prefix] = value;
}

</script>


<template>
  <form @submit.prevent="">
    <Input
      v-for="item in props.content"
      :placeholder="item.placeholder"
      :labelText="item.label"
      :type="item.type"
      :value="val"
      :prefix="item.prefix"
      :Change="updateFormData"
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