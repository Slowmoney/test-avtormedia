<template>
  <div class="t-input">
    <IconSearch />
    <input :value="value" :placeholder="placeholder" @input="updateValue($event.target.value)" @keyup.enter="$emit('enter', value)" />
  </div>
</template>

<script>import IconSearch from "./icons/IconSearch.vue";


export default {
  component: [IconSearch],
  props: {
    placeholder: { type: String, default: "" }, value: {
      type: String,
      default: ""
    }
  },
  methods: {
      updateValue(value) {
        this.$emit('input', value)
      }
    }
}
</script>

<style lang="scss">
.t-input {
  background: rgba(60, 60, 67, 0.1);
  border-radius: 10px;
  padding: 14px 16px 14px 8px;
  white-space: nowrap;
  & input {
    background-color: unset;
    outline: unset;
    border: none;
  }
}
</style>
