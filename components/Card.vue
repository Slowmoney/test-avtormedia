<template>
  <div class="card">
    <div class="card-image"></div>
    <div class="card__wrap card-spacer">
      <div class="card-body">
        <div class="card-title">{{ title }}</div>
        <div class="card-desc">{{ desc }}</div>
      </div>
      <div class="card-spacer"></div>
      <div class="card-actions">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 690px) {
  .card {
    max-width: 309px;
    margin-left: 11.5px;
    margin-right: 11.5px;
    margin-bottom: 40px;
    &__wrap {
      padding: 16px 16px 0;
    }
  }
}
@media (max-width: 690px) {
  .card {
    border: none !important;
    flex-direction: row-reverse !important;
    max-width: none;
    border-radius: 0 !important;
    margin: 0 16px;
    &__wrap {
      padding: 16px 0 ;
    }
    & + & {
      border-top: 2px solid #d1d1d6 !important;
    }
  }
  .card__wrap,
  .card-image {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .card{
    div + div{
      margin-right: 10px;
    }
  }
}

.card {
  font-family: Manrope, Inter;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  padding: 32px 0 16px 0;
  display: flex;
  flex-direction: column;
  &-image {
    background-image: url("/Saly-9.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    min-height: 250px;
  }
  &-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    color: #000;
    margin-bottom: 8px;
  }
  &-desc {
    font-size: 17px;
    color: rgba(60, 60, 67, 0.6);
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;

    text-transform: capitalize;
  }
  &-body {
    ::first-letter {
      text-transform: capitalize;
    }
  }
  &-spacer {
    flex: 1;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
  }
  &-actions{
    padding-top: 16px;
  }
}
</style>
