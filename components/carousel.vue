<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="item in DataListSlider"
      :key="item.id"
      :src="GetSrc(item.preview_image)">
      <button class="btn_home btn">
        <nuxt-link :to=getLink(item.id)>
          <h2 class="carousel-name">{{item.name}}</h2>
          <div class="carousel-desc">{{item.shortDesc}}</div>
          <div class="date">{{item.date}}</div>
        </nuxt-link>
      </button>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
  data () {
    return {
      NewsDataList: [],
    }
  },
  computed: {
    DataListSlider() {
      return this.NewsDataList.filter(item => item.slider === true)
    },
  },
  async fetch() {
    this.NewsDataList = await fetch(
      'http://demo-api.vsdev.space/api/articles'
    ).then(res => res.json())
  },
  methods: {
    GetSrc(src) {
      return `/images/${src}`;
    },
    getLink (src){
      return `articles/${src}`;
    }
  }
}
</script>

<style>
.v-carousel {
  width: 1200px;
  margin: 30px auto 0;
}

.btn_home {
  position: absolute;
  bottom: 50px;
  left: 600px;
  transform: translateX(-50%);
  margin:  auto 0;
  padding: 25px 30px;
  background-color: rgba(0,0,0,0.8);
}

.v-window__next {
  margin: 0 1148px;
}
.carousel-name {
  font-size: 40px;
  margin-bottom: 10px;
  text-align: left;
}

.carousel-desc {
  text-align: left;
  font-size: 20px;
}

.date {
  margin-top: 10px;
  text-align: left;
  font-size: 12px;
}
</style>
