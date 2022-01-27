<template>
  <div class="comments">
    <div class="comments_title">Комментарии: </div>
    <div v-for="comment in Comments" :key="comment.id" class="wrapper_comment" >
      <div>
        <img src="../assets/user.png" alt="user" class="user_photo">
      </div>

      <div>
        <div class="comment_title">
          <div class="comment_name">{{comment.user_name}}</div>
          <div class="comment_dates">
            <div class="comment_date">Создано {{$moment(comment.created_at).format('DD.MM.YYYY')}}</div>
            <div class="comment_date">Изменено {{$moment(comment.updated_at).format('DD.MM.YYYY')}}</div>
          </div>
        </div>
        <div class="comment_desc">{{comment.comment}}</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'header',
  data () {
    return {
      Comments: [],
    }
  },
  async fetch() {
    this.Comments = await fetch(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}/comments`
    ).then(res => res.json())
  }
}
</script>

<style>
.comments {
  margin-top: 30px;
}
.wrapper_comment {
  display: flex;
  justify-content: start;
  /*align-items: center;*/
  margin-bottom: 5px;
  border: 1px solid #EEECEC;
  /*border-radius: 5px;*/
  padding: 3px 20px;
}

.user_photo {
  margin-right: 15px;
  height: 50px;
  margin-top: 5px;
}

.comment_title {
  width: 700px;
  font-size: 24px;
  margin-top: 8px;
}
.comment_name {
  font-weight: bold;
}
.comment_dates {
  margin-top: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.comment_date {
  margin-right: 15px;
  font-size: 12px;
  opacity: 0.6;
}
.comment_desc {
  margin: 10px 0;
  font-size: 24px;
}

.comments_title {
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: bold;
}
</style>
