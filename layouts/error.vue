<template>
  <div>
    <h1 v-if="error.statusCode === 404" class="errorPage">404 page</h1>
    <button class="btn_error btn">
      <img src="../assets/back.png" alt="backarrow" class="arrow_back">
      <NuxtLink to="/">Вернуться на главную страницу</NuxtLink>
    </button>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>
.errorPage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 180px;
}
</style>
