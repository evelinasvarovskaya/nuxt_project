<template>
  <div>
    <articlePage></articlePage>
  </div>
</template>

<script>
export default {
  layout: 'header',
  data: () => ({
    id: null
  }),
  mounted() {
    this.id = this.$route.params.id;
  }
}
</script>

