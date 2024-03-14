<template>
    <div class="character-introduction">
        <div class="container" id="container1">
            <div class="box top" id="box1">
                <div class="box-header">
                    <h2 class="title">武将介绍</h2>
                </div>
                <div class="box-body flex">
                    <div id="span1">
                        <div id="group">
                            <img :src="`./image/decoration/group_${info[chara][1]}.png`" alt="" />
                        </div>
                        <div id="skin">
                            <img :src="`./image/${chara}.jpg`" :alt="trans[chara]" class="big-image" />
                        </div>
                        <p>{{ trans[chara] }}</p>
                    </div>
                    <div id="span2">
                        <p class="p-title top" id="chara-title"><b>称号：</b>{{ characters.title[chara] }}</p>
                        <div class="p-title flex" id="span3">
                            <p><b>体力：</b></p>
                            <ul class="flex" id="hp">
                                <li v-for="index in hp" :key="index"><img src="../../public/image/decoration/hp.png" alt="hp"></li>
                                <li v-for="index in maxHp-hp" :key="index"><img src="../../public/image/decoration/hp_v.png" alt="hp"></li>
                            </ul>
                        </div>
                        <p class="p-title"><b>技能：</b></p>
                        <div id="span4">
                            <p class="p-skill" v-for="(item, index) in info[chara][3]" :key="index" 
                            v-html="`<b>${trans[item]}</b>：${trans[item+'_info']}`"
                            :class="{'top': index === 0}"></p>
                            <p class="p-skill p-skill-to-gain" v-for="(item, index) in info[chara][4]" :key="index" 
                            v-html="`<b>${trans[item]}</b>：${trans[item+'_info']}`"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box top" id="box2">
                <div class="box-header">
                    <h2 class="title">武将选择</h2>
                </div>
                <div class="box-body">
                    <ul class="side-card-list">
                        <li v-for="(item, index) in charas" :key="index">
                            <router-link :to="`/characterIntroduction/${item}`" >
                                <card-li :name="item" :trans="trans[item]"/>
                            </router-link>
                        </li>
                    </ul>
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
import characters from '@/lib_character'

const route = useRoute()

// const chara = ref(route.params.chara)
const chara = computed(() => route.params.chara)
const trans = characters.translation, info = characters.info
const hp = computed(() => (typeof info[chara.value][2] == "string" ? parseInt(info[chara.value][2].split('/')[0]) : info[chara.value][2]))
const maxHp = computed(() => (typeof info[chara.value][2] == "string" ? parseInt(info[chara.value][2].split('/')[1]) : hp.value))

const charas = reactive(Object.keys(info).sort())

function onCharaChange() {
    console.log(route.params.chara);
    chara.value = route.params.chara;
}

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
    margin-top: 16px;
    align-items: center;
    overflow-y: auto;
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
