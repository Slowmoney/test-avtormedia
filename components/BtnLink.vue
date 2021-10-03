<template>
  <div  class="btn-link" @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>


<style lang="scss">
.btn-link {
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: #ff008a;
  white-space: nowrap;
  width: fit-content;
  span {
    vertical-align: 6px;
  }
  svg{
    fill: #ff008a;
    text-decoration: none;
  }
  &:hover{
    text-decoration: underline;
  }
}
</style>
