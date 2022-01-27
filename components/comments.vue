<template>
  <div>
    <commentsList></commentsList>
    <commentForm v-on:addComment="addComment"></commentForm>
  </div>
</template>


<script>

export default {
  methods: {
    async addComment(data) {
      await this.$axios.post(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}/comments`, {
        user_name: data.name,
        comment: data.comment,
      });
      window.location.reload()
    }
  }
}
</script>
