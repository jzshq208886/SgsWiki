<template>
  <div class="header background">
    <div class="site-topbar">
      <div class="container">
        <h1>理工杀维基</h1>
        <nav>
          <router-link to="/" :class="{ 'active': $route.path === '/' }">首页</router-link> |
          <router-link to="/characterIntroduction/lgs_chenyaoshi"
            :class="{ 'active': $route.name === 'characterIntroduction' }">武将</router-link> |
          <router-link to="/cardIntroduction/huanjuyitang"
            :class="{ 'active': $route.name === 'cardIntroduction' }">游戏牌</router-link>
        </nav>
      </div>
    </div>
    <div class="site-header">
      <div class="container form">
        <input id="searcher" type="text" placeholder="搜索武将或游戏牌名称">
      </div>
    </div>
  </div>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const $route = useRoute()
const router = useRouter()
function onCardLinkClick(card) {
  router.push(`/cardIntroduction/${card}`);
}
onMounted(() => {
  window.onCardLinkClick = onCardLinkClick;
})
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

div,
ul {
  overflow: hidden;
  clear: both;
}

html,
body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.header {
  background-color: #f5f5f5;
}

.site-topbar {
  color: #b0b0b0;
  font-size: 80%;
  background-color: #333;
}

.site-topbar h1 {
  float: left;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 4px;
  font-size: 24px;
  line-height: 44px;
}

nav {
  float: right;
  margin-right: 8px;

  font-size: 20px;
  line-height: 44px;
}

nav a {
  color: #b0b0b0;
  text-decoration: none;
}

/* nav a.router-link-exact-active {
  font-weight: bold;
} */

nav .active {
  font-weight: bold;
}

#searcher {
  height: 44px;
  width: 300px;
  border-radius: 26px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.box {
  background-color: #ffffff;
  margin-top: 20px;
  margin-bottom: 10px;
}

.box-header h2 {
  float: left;
  margin-top: 18px;
  margin-bottom: 0px;
  margin-left: 30px;
  font-size: 30px;
}

.side-card-list {
  list-style: none;
  /* overflow-y: auto; */
  clear: both;
}

.side-card-list li {
  float: left;
  margin-right: 18px;
  margin-bottom: 18px;
}

.side-card-list a {
  text-decoration: none;
}

.flex {
  display: flex;
}

.end {
  margin: 20px;
}

.top {
  margin-top: 0px;
}

.container {
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
}

.red {
  color: #ff0000;
}
</style>
