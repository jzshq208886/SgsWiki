<template>
    <div class="card-introduction">
        <div class="container" id="container1">
            <div class="box top" id="box1">
                <div class="box-header">
                    <h2 class="title">游戏牌介绍</h2>
                </div>
                <div class="box-body flex">
                    <div id="span1">
                        <div id="skin">
                            <img :src="`./image/${card}.jpg`" :alt="trans[card]" class="big-image" />
                        </div>
                        <p>{{ trans[card] }}</p>
                    </div>
                    <div id="span2">
                        <p class="p-title top"><b>类型：</b>{{ type+subtype }}</p>
                        <p class="p-title"><b>效果：</b></p>
                        <div id="span4">
                            <el-scrollbar max-height="220px">
                                <p class="p-skill">{{ trans[`${card}_info`] }}</p>
                            </el-scrollbar>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box top" id="box2">
                <div class="box-header">
                    <h2 class="title">游戏牌选择</h2>
                </div>
                <div class="box-body">
                    <div id="span5">
                        <el-scrollbar max-height="340px">
                            <ul class="side-card-list">
                                <li v-for="(item, index) in cardsList" :key="index">
                                    <router-link :to="`/cardIntroduction/${item}`" >
                                        <card-li :name="item" :trans="trans[item]"/>
                                    </router-link>
                                </li>
                            </ul>
                        </el-scrollbar>
                    </div>
                </div>
            </div>
        </div>
        <div class="end"></div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import CardLi from '@/components/CardLi.vue'
import cards from '@/lib_card'

const route = useRoute()

const card = computed(() => route.params.card)
const trans = cards.translation, info = cards.info
const type = computed(() => trans[info[card.value][0]])
const subtype = computed(() => (info[card.value][1] === null ? "" : `/${trans[info[card.value][1]]}`))

const cardsList = reactive(Object.keys(info).sort())

</script>

<style scoped>
#container1 {
    height: 460px;
    display: flex;
}

#box1 {
    /* float: left; */
    width: 800px;
    height: 100%;
}

#box2 {
    /* float: left; */
    width: 416px;
    height: 100%;
    margin-left: 10px;
}

#span1 {
    margin-left: 60px;
    margin-right: 0px;
    margin-top: 20px;
    margin-bottom: 0px;
    position: relative;
}

#span1 p {
    margin-top: 10px;
    text-align: center;
    font-size: 24px;
}

#span2 {
    /* height: 360px; */
    margin-left: 50px;
    margin-right: 0px;
    margin-top: 20px;
    margin-bottom: 40px;
    align-items: center;
}

#span2 p {
    text-align: left;
}

#span4 {
    max-height: 220px;
    /* margin-top: 16px; */
    align-items: center;
    /* overflow-y: auto; */
}

#span5 {
    margin-left: 56px;
    margin-top: 36px;
}

.big-image {
    height: 242px;
    border-radius: 5%;
}

#group {
    position: absolute;
    top: 4px;
    left: 2px;
}

.p-title {
    width: 460px;
    font-size: large;
    margin-top: 16px;
}

.p-skill {
    width: 460px;
    margin-top: 16px;
}

.p-skill-to-gain {
    color: #c0c0c0;
}

.top {
    margin-top: 0px;
}
</style>
