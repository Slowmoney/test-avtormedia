<template>
  <button  class="btn" :class="[`btn_${variant}`]" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary"
    },
  }
}
</script>

<style lang="scss">
.btn {
  font-family: Manrope, Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  padding: 14px;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  outline-color: #ff008a;
  &_primary {
    background-color: #ff008a;
    color: #fff;
  }
  &_secondary {
    color: #ff008a;
    background: #ffffff;
    border: 1px solid #ff008a;
  }
  &:hover {
  }
}
</style>
