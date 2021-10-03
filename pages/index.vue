<template>
  <div class="post-list">
    <Card v-for="(e, i) in posts" :key="i" class="post"  :title="e.title" :desc="e.body"><NuxtLink :to="`/post/${e.id}`"><IconComment/></NuxtLink><span class="post-comment">{{e.comments.length}}</span><NuxtLink :to="`/post/${e.id}`"><IconPencilCreate/></NuxtLink></Card>
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
  }
}
</script>
<style lang="scss">

.post {
  &-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1024px;
    justify-content: center;
    margin: auto;
  }
  &-comment{
    color: rgba(60, 60, 67, 0.6);
    font-size: 17px;
    margin-left: 12px;
    margin-right: 32px;
    vertical-align: 6px;
  }
}
</style>
