<script setup>
import {$ref} from "vue/macros";
  const props = defineProps({
    type: String,
    labelText: String,
    placeholder: String,
    prefix: String,
    Change: Function,
  });

  let value = $ref("");

  const OnChange = (e) => {
    value = e.target.value;
    const data = {
      prefix: props.prefix,
      value,
    }
    props.Change && props.Change(data);
  }

</script>

<template>
  <div>
    <label>{{labelText}}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @change="OnChange"
    >
  </div>
</template>



<style scoped>

</style>