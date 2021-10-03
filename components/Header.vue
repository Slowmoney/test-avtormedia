<template>
  <div class="t-header">
    <div class="t-header__wrap">
      <div class="t-header-logo">Logo</div>
      <div class="t-header-spacer"></div>
      <div class="t-header-title">Посты</div>
      <Input class="t-header-search" placeholder="Поиск" />

      <div class="t-header-btn btn btn_posts">
        <IconGridRow class="btn-icon" />
        <span>Посты</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@media (min-width: 690px) {
  .t-header {
    padding: 24px 90px;
  }
}
@media (max-width: 690px) {
  .btn.btn_posts {
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
  &-btn.btn {
      white-space: nowrap;
      span {
        vertical-align: 4px;
      }
    }
  &-spacer {
    flex: 1;
  }
}
.btn_posts {
  color: #ff008a;
  padding-left: 90px;
}
</style>
