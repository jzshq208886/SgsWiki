<template>
    <div class="box card-box">
        <div class="box-header">
            <h2> {{ title }} </h2>
            <div class="selector"><span>筛选</span></div>
        </div>
        <div class="box-body">
            <ul class="card-list">
                <li v-for="(item, index) in cards" :key="index">
                    <router-link :to="`/${props.type}Introduction/${item}`">
                        <card-li :name="item" :trans="trans[item]" image-height="158px" />
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import CardLi from './CardLi.vue'

const props = defineProps({
    'title': {
        type: String,
        default: '未命名'
    },
    'path': {
        type: String,
        default: '../lib_card'
    },
    type: {
        type: String,
        default: "character",
    },
})
// const cardsInfo = require(props.path)            // 会报Warning
var cardsInfo
if (props.type == 'card')
    cardsInfo = require('@/lib_card').default;
else
    cardsInfo = require('@/lib_character').default;

const trans = cardsInfo.translation
const cards = reactive(Object.keys(cardsInfo.info).sort())

</script>

<style scoped>

.selector {
    float: right;
    background-color: #eaeaea;
    width: 60px;
    height: 32px;
    border-radius: 8px;
    margin-top: 24px;
    margin-right: 36px;
    text-align: center;
    position: relative;
    overflow: auto;
    clear: none;
}

.selector span{
    position: absolute;
    top: 4px;
    left: 14px;
}

.box-body {
    clear: both;
}

.card-list {
    list-style: none;
    margin-left: 110px;
    margin-top: 54px;
    margin-bottom: 26px;
    clear: both;
}

.card-list li {
    float: left;
    margin-right: 28px;
    margin-bottom: 18px;
}

a, a:link {
    text-decoration: none;
}

</style>