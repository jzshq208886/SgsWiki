<template>
    <div class="card-li">
        <div class="img">
            <img v-bind="attr" :style="{ fontSize: fontSize }">
        </div>
        <div class="name"> {{ trans }} </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const props = defineProps({
    'name': {
        type: String,
        default: 'lgs_chenyaoshi',
    },
    'trans':{
        type: String,
        default: '未命名',
    },
    imageHeight: {
        type: String,
        default: "118px",
    },
    fontSize: {
        type: Number,
        default: 90,
    },
})

const fontSize = computed(() => {
    return props.fontSize * (props.trans.length > 6 ? 0.5 : 1) + '%';
})

const attr = reactive({
    src: `./image/${props.name}.jpg`, // `@/assets/images/${props.name}.jpg`
    alt: props.trans,
    height: props.imageHeight,
})

</script>

<style scoped>
.img img {
    /* height: 158px; */
    border-radius: 5%;
}

.name {
    color: #333;
    font-size: 90%;
}
</style>