<template>
  <header class="t-header">
    <div class="t-header__wrap">
      <div class="t-header-logo">Logo</div>
      <div class="t-header-spacer"></div>
      <div class="t-header-title">Посты</div>
      <Input :value="$store.state.searchString" class="t-header-search" placeholder="Поиск" @input="setSearchString" @enter="search" />
      <BtnLink class="t-header-btn btn_posts" @click="$router.push('/')">
        <IconGridRow />
        <span style="margin-left: 7px;">Посты</span>
      </BtnLink>
    </div>
  </header>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
export default {
  methods: {
    ...mapActions(["search"]),
    ...mapMutations(["setSearchString"])
  }
}
</script>
<style lang="scss">
@media (min-width: 690px) {
  .t-header {
    padding: 24px 90px;
  }
}
@media (max-width: 690px) {
  .btn-link.btn_posts {
    display: none;
  }
  .t-header {
    padding: 16px;
  }
}
.t-header {
  &__wrap {
    align-items: center;
    display: flex;
    @media (max-width: 690px) {
      flex-direction: column;
      align-items: normal;
    }
  }

  &-logo {
    display: block;
    padding-right: 30px;
    @media (max-width: 690px) {
      display: none;
    }
  }
  &-title {
    display: none;
    font-weight: bold;
    font-size: 32px;
    color: #000000;
    margin-bottom: 8px;
    @media (max-width: 690px) {
      display: block;
    }
  }
  &-spacer {
    flex: 1;
  }
}
.btn_posts {
  margin-left: 90px;
}
</style>
