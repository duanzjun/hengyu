<template>
    <div class="b-container">
        <!-- <div class="title">
            <h3>业务体系</h3>
        </div> -->
        <t-divider />
        <t-tabs :value="currentValue" :list="lists" @change="onChange">
            <t-tab-panel v-for="item in lists" :key="item.value" :value="item.value">
                <template #panel>
                    <div class="project-list-wrap">
                        <div class="project-card" v-for="child in item.children" :key="child.title">
                            <div class="project-card__main">
                                <div class="project-card__thumb">
                                    <t-image :src="child.img" shape="round"></t-image>
                                </div>
                                <div class="project-card__title">{{ child.title }}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </t-tab-panel>
        </t-tabs>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const currentValue = ref('1');
import PRO1 from '../assets/imgs/project/pro1.jpeg'
import PRO2 from '../assets/imgs/project/pro2.jpg'
import PRO3 from '../assets/imgs/project/pro3.jpeg'
import PRO4 from '../assets/imgs/project/pro4.jpeg'
import PRO5 from '../assets/imgs/project/pro5.jpeg'
import PRO6 from '../assets/imgs/project/pro6.jpg'
import PRO7 from '../assets/imgs/project/pro7.jpeg'
import PRO8 from '../assets/imgs/project/pro8.jpg'
import PRO9 from '../assets/imgs/project/pro9.jpeg'
import PRO10 from '../assets/imgs/project/pro10.jpg'
import PRO11 from '../assets/imgs/project/pro11.jpg'
import PRO12 from '../assets/imgs/project/pro12.jpg'
import PRO13 from '../assets/imgs/project/pro13.jpg'
import PRO15 from '../assets/imgs/project/pro15.jpg'
import PRO16 from '../assets/imgs/project/pro16.jpg'
import PRO17 from '../assets/imgs/project/pro17.jpeg'
import PRO18 from '../assets/imgs/project/pro18.jpg'
import PRO19 from '../assets/imgs/project/pro19.jpg'
const lists = [
    {
        label: '测绘调查',
        value: '1',
        children: [
            { title: '工程测量', img: PRO12, },
            { title: '海洋测绘', img: PRO13 },
            { title: '摄影测量与遥感', img: PRO10 },
            { title: '界线与不动产测绘', img: PRO4 },
            { title: '地理信息系统工程', img: PRO5 },
            { title: '海洋调查', img: PRO17 },
            { title: '地质调查', img: PRO19 },
            { title: '生态环境监测', img: PRO18 },
            { title: '结构检测（沉降位移观测）', img: PRO15 },
        ]
    },
    {
        label: '工程咨询',
        value: '2',
        children: [
            { title: '环境影响评价', img: PRO7 },
            { title: '海域使用论证', img: PRO3 },
            { title: '通航航道条件影响评估', img: PRO9 },
            { title: '通航安全保障方案', img: PRO5 },
            { title: '地质灾害危险性评估', img: PRO8 }
        ]
    }, {
        label: '系统信息',
        value: '3',
        children: [
            { title: '智慧物联网监管平台', img: PRO6 },
            { title: '海域动态监管平台', img: PRO2 },
            { title: '海上风电全生命周期运维解决方案', img: PRO11 },
            { title: '港口码头运维解决方案', img: PRO1 },

        ]
    }, {
        label: '工程勘察',
        value: '4',
        children: [
            { title: '岩土工程勘测', img: PRO16 },
        ]
    }
]

const onChange = (value: string) => {
    currentValue.value = value;

}

</script>
<style lang="less" scoped>
.title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding-top: 10px;
}

.project-list-wrap {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0 12px;
}

.project-card {
    box-sizing: border-box;
    font-size: 24rpx;
    border-radius: 0 0 8px 8px;
    border-bottom: none;
    margin-top: 10px;

}

.project-card__main {
    position: relative;
    display: flex;
    line-height: 1;
    padding: 0;
    background: transparent;
    width: 121rpx;
    border-radius: 0 0 8px 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    flex-direction: column;
}

.project-card__thumb {
    flex-shrink: 0;
    position: relative;
    width: 190px;
    height: 120px;

}

.project-card__thumb .t-image {
    height: 100%;
}

.project-card__title {
    margin-top: 10px;
    word-wrap: break-word;
    width: 190px;
    line-height: 1.5em;
}
</style>