<template>
  <div>
    <div v-if="NewsDataList">
      <div class="title">
        <div>
          <h2 class="article-name">{{NewsDataList.name}}</h2>
        </div>
        <div class="news-desc">
          <span>{{NewsDataList.shortDesc}}</span>
        </div>
        <div class="news-date_wrapper">
          <div>
            <span class="news-date">Создано {{$moment(NewsDataList.created_at).format('DD.MM.YYYY')}}</span>
          </div>
          <div>
            <span class="news-date">Изменено {{$moment(NewsDataList.updated_at).format('DD.MM.YYYY')}}</span>
          </div>
        </div>
      </div>
      <div class="new-img">
        <img :src="'/images/' + NewsDataList.full_image">
      </div>
      <div class="title">
        <div class="news-desc">
          <span>{{NewsDataList.desc}}</span>
        </div>
        <comments></comments>

      </div>
    </div>
    <button class="btn_article btn">
      <img src="../assets/back.png" alt="backarrow" class="arrow_back">
      <NuxtLink to="/articles">Перейти к новостям</NuxtLink>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NewsDataList: [],
    };
  },
  async fetch() {
    this.NewsDataList = await fetch(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}`
    ).then(res => res.json())
    console.log(this.NewsDataList)
  }
}
</script>


<style>

.arrow_back {
  height: 15px;
}
.article-name {
  font-size: 50px;
}

.new-img img{
  height: 600px;
  display: block;
  margin: 0 auto;
}

.title{
  display: block;
  margin: 30px auto;
  text-align: left;;
  width: 800px;
}

.news-date{
  font-size: 13px;

}
.news-desc {
  margin: 30px 0;
  font-size: 24px;
}

.news-date_wrapper {
  display: flex;
  flex-direction: row;
  width: 240px;
  justify-content: space-between;
}

.btn_article {
  position: fixed;
  top: 105px;
  left: 50px;
}
</style>
