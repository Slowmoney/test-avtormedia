<template>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-title">{{ title }}</div>
    <div class="card-desc"></div>
    <div class="card-actions"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.card {
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
}
</style>
