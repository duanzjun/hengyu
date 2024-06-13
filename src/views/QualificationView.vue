<template>
    <div class="b-container">
        <!-- <div class="q-title">
        <h3>资质证书</h3>
    </div> -->
        <!-- <t-divider /> -->
        <t-tabs default-value="first">
            <t-tab-panel value="first">
                <template #label>
                    <div>执照证书</div>
                </template>
                <div class="image-item" v-for="(item, index) in img01">

                    <t-image :style="{ width: '100%' }" fit="fill" :src="item" shape="round"
                        @click="handlePreviewImg(img01, index)"></t-image>
                </div>
            </t-tab-panel>
            <t-tab-panel value="five">
                <template #label>高新技术</template>
                <div class="image-item" v-for="(item, index) in img05">
                    <t-image :style="{ width: '100%' }" fit="fill" :src="item" shape="round"
                        @click="handlePreviewImg(img02, index)"></t-image>
                </div>
            </t-tab-panel>
            <t-tab-panel value="second">
                <template #label>资质证书</template>
                <div class="image-item" v-for="(item, index) in img02">
                    <t-image :style="{ width: '100%' }" fit="fill" :src="item" shape="round"
                        @click="handlePreviewImg(img02, index)"></t-image>
                </div>
            </t-tab-panel>
            <t-tab-panel value="third">
                <template #label>体系认证</template>
                <div class="image-item" v-for="(item, index) in img03">
                    <t-image :style="{ width: '100%' }" fit="fill" :src="item" shape="round"
                        @click="handlePreviewImg(img03, index)"></t-image>
                </div>
            </t-tab-panel>
            <t-tab-panel value="four">
                <template #label>专利证书</template>
                <div class="image-item" v-for="(item, index) in img04">
                    <t-image :style="{ width: '100%' }" fit="fill" :src="item" shape="round"
                        @click="handlePreviewImg(img04, index)"></t-image>
                </div>
            </t-tab-panel>
        </t-tabs>


        <t-image-viewer v-model:images="iv.images" v-model:visible="iv.visible" v-model:index="iv.index" show-index />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import YYZZ from '../assets/imgs/yyzz.png'
import CHZZZS from '../assets/imgs/chzzzs.png'
import HKQYJY from '../assets/imgs/hkqyjy.png'
import HKJYXKZ from '../assets/imgs/hkjyxkz.png'
import TXRZ01 from '../assets/imgs/txrz01.jpg'
import TXRZ02 from '../assets/imgs/txrz02.jpg'
import TXRZ03 from '../assets/imgs/txrz03.jpg'
import ZL01 from '../assets/imgs/zl01.jpg'
import ZL02 from '../assets/imgs/zl02.jpg'
import ZL03 from '../assets/imgs/zl03.jpg'
import ZL04 from '../assets/imgs/zl04.jpg'
import ZL05 from '../assets/imgs/zl05.jpg'
import GXJS from '../assets/imgs/gxjs01.jpg'

const iv = ref({
    index: 0,
    visible: false,
    images: [] as any[]
})

const img01 = [
    YYZZ,
]
const img02 = [
    CHZZZS,
    HKQYJY,
    HKJYXKZ,
]
const img03 = [
    TXRZ01, TXRZ02, TXRZ03
]
const img04 = [
    ZL01, ZL02, ZL03, ZL04, ZL05
]
const img05 = [GXJS]

const handlePreviewImg = (images: String[], index: number) => {
    iv.value.visible = true
    iv.value.index = index
    iv.value.images = images
}
</script>

<style lang="less" scoped>
.b-container {
    // background-color: #999;
}

.q-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding-top: 10px;

}

.image-item {
    width: 100%;

    padding: 20px;

    display: flex;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
}
</style>