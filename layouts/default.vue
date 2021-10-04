<template>
  <div class="default">
    <Header></Header>
    <main>
      <Nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  scrollToTop: true
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
* {
  /* stylelint-disable font-family-no-missing-generic-family-keyword */
  font-family: Inter;
  /* stylelint-enable font-family-no-missing-generic-family-keyword */
  margin: 0;
  padding: 0;
}
.default {
  display: flex;
  flex-direction: column;
  main {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
}
</style>
