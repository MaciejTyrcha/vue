<script setup>
  const props = defineProps({
    type: String,
    label: String,
    placeholder: String,
    name: String,
    value: String,
  });

defineEmits(['updateData'])
let inputValue = $ref(props.value);

const setValue = (e) => {
  inputValue = e.target.value;
}

</script>

<template>
  <div>
    <label>{{label}}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="setValue"
      @change="$emit('updateData', {name, value: inputValue})"
    >
  </div>
</template>



<style scoped>

</style>