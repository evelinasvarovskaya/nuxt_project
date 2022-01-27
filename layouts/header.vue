<template>
  <div>
    <nav>
      <div class="header">
        <div class="navinfo">
          <router-link to="/" class="logo"><img src="../assets/news.png" alt="logo"></router-link>
          <div class="nav">
            <NuxtLink to="/">Главная страница</NuxtLink> |
            <NuxtLink to="/articles">Новости</NuxtLink>  |
            <NuxtLink to="/galery">Галерея изображений</NuxtLink>
          </div>
        </div>
        <form class="search__form ">
          <v-text-field
            class="theme--dark theme--light"
            color="white"
          ></v-text-field>
          <button ><img src="/images/search.png" alt="search"></button>
        </form>
      </div>
    </nav>
    <Nuxt></Nuxt>
  </div>

</template>

<style>
nav {
  background-color: #2c3e50;
  color: #ffff;
}
img {
  height: 30px;
}

.navinfo {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
}
.nav {
  margin: 30px;
  font-size: 18px;
}

.nav a.nuxt-link-exact-active {
  color: aquamarine;
}
.nav a {
  font-weight: bold;
  color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  margin: 0 auto;
}

/*.theme--light {*/
/*  color: white;*/
/*}*/
/*.theme--dark{*/
/*  color: white;*/
/*}*/
.search__form {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
}
</style>
