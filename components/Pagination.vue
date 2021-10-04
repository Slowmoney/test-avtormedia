<template>
  <nav class="pagination">
    <div class="page" @click="setPage(+$store.state.currentPage-1)">
      <IconArrowLeft />
    </div>
    <div
      v-for="(e, i) in getPages"
      :key="i"
      :class="{ 'page_select': +e === +$store.state.currentPage, 'page': typeof e == 'number' }"
      @click="setPage(+e)"
    >{{ e }}</div>
    <div class="page" @click="setPage(+$store.state.currentPage+1)">
      <IconArrowLeft style="transform: rotate(180deg);" />
    </div>
  </nav>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data: () => ({
  }),
  computed: {
    getPages() {
      const toView = []
      toView.push(1)
      toView.push(2)
      if (this.$store.state.currentPage > 4) {
        toView.push('...')
      }
      toView.push(+this.$store.state.currentPage - 1)
      toView.push(+this.$store.state.currentPage)
      toView.push(+this.$store.state.currentPage + 1)

      if (!(this.$store.state.currentPage > this.total - 4)) {
        toView.push('...')
      }

      toView.push(this.total - 1)
      toView.push(this.total)
      return toView.reduce((acc, c) => {
        if (typeof c === 'number') {
          !acc.includes(c) && c <= this.total && c > 0 && acc.push(c)
        } else {
          acc.push(c)
        }
        return acc
      }, [])
    },
    ...mapState(['total'])
  },

  methods: {
    ...mapActions(['setPage'])
  }
}
</script>
<style lang="scss">
.pagination {
  display: flex;
  float: right;
  div {
    width: 32px;
    height: 32px;
    border: 1px solid #e2e2e2;
    padding: 5px;
    text-align: center;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;

    & + div {
      margin-left: 8px;
    }
  }
}
.page_select {
  border: 1px solid #ff008a !important;
  color: #ff008a;
}
.page {
  &:hover {
    border: 1px solid #ff008a !important;
    color: #ff008a;
  }
}
</style>
