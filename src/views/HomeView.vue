<template>
  <div class="home">
    <card-box class="container top" title="武将" path="../lib_character" type="character" />
    <card-box class="container" title="游戏牌" path="../lib_card" type="card" />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="end"></div>
  </div>
</template>

<script setup>
import CardBox from '@/components/CardBox.vue';

function mounted() {
    document.title = "理工杀维基";
}

</script>


<style scoped>
.home {
  /* background-color: #f5f5f5; */
  height: 100%;
}

.card-box {
  background-color: #ffffff;
  margin-top: 20px;
}

.top {
  margin-top: 0px;
}
</style>
