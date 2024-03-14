<template>
    <div class="card-li">
        <div class="img">
            <img v-bind="attr">
        </div>
        <div class="name"> {{ trans }} </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
    'name': {
        type: String,
        default: 'lgs_chenyaoshi',
    },
    'trans':{
        type: String,
        default: '未命名',
    },
})

const attr = reactive({
    src: `./image/${props.name}.jpg`, // `@/assets/images/${props.name}.jpg`
    alt: props.trans,
})

</script>

<style scoped>
.img img {
    height: 118px;
    border-radius: 5%;
}

.name {
    color: #333;
    font-size: 90%;
}
</style>