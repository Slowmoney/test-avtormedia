<template>
  <div class="t-input">
    <IconSearch />
    <input :placeholder="placeholder" />
  </div>
</template>

<script>import IconSearch from "./icons/IconSearch.vue";


export default {
  component:[IconSearch],
  props:['placeholder']
}
</script>

<style lang="scss">
  .t-input{
    background: rgba(60, 60, 67, 0.1);
    border-radius: 10px;
    padding: 14px 16px 14px 8px;
    & input{
      background-color: unset;
      outline: unset;
      border: none;
    }
  }

</style>
