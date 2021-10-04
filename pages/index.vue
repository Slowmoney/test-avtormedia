<template>
  <div class="post-container">
    <div class="post-list">
      <Card v-for="(e, i) in posts" :key="i" class="post" :title="e.title" :desc="e.body">
        <template v-if="e.comments">
          <NuxtLink :to="`/post/${e.id}`">
            <IconComment />
          </NuxtLink>
          <span class="post-comment">{{ e.comments.length }}</span>
        </template>
        <NuxtLink :to="`/post/${e.id}`">
          <IconPencilCreate />
        </NuxtLink>
      </Card>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async asyncData({ app, route, params, error, store }) {
    try {
      await store.dispatch('getPostList')
    } catch (err) {
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState(['posts'])
  },
  watch: {
    posts() {
      window.scrollTo({ top: 0 })
    }
  }
}
</script>
<style lang="scss">
@media (max-width: 1002px) {
  .post-container {
    max-width: 668px !important;
  }
}
.post {
  &-container {
    max-width: 1002px;
    justify-content: center;
    margin: auto;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }
  &-comment {
    color: rgba(60, 60, 67, 0.6);
    font-size: 17px;
    margin-left: 12px;
    margin-right: 32px;
    vertical-align: 6px;
  }
}
</style>
