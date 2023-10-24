<template>
    <div class="b-container">
        
  <div class="title">
    <h3>业务体系</h3>
  </div>
  <t-divider />
        <!-- <t-tabs :value="currentValue" :list="lists" @change="onChange">
            <t-tab-panel v-for="item in lists" :key="item.value" :value="item.value">
                <template #panel>
                    <t-cell-group bordered>
                        <t-cell :title="child.title" v-for="child in item.children" hover />
                    </t-cell-group>
                </template>

            </t-tab-panel>
        </t-tabs> -->
    </div>
        <div class="project-list-wrap">
        <div class="project-card" v-for="item in list2" :key="item.title">
            <div class="project-card__main">
                <div class="project-card__thumb" >
                <t-image :src="item.img" shape="round"
                    ></t-image>
                </div>
                <div class="project-card__title">{{ item.title }}</div>
            </div>
        </div>
    </div>
    
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const currentValue = ref('1');
import PRO1 from '../assets/imgs/project/pro1.jpeg'
import PRO2 from '../assets/imgs/project/pro2.jpeg'
import PRO3 from '../assets/imgs/project/pro3.jpeg'
import PRO4 from '../assets/imgs/project/pro4.jpeg'
import PRO5 from '../assets/imgs/project/pro5.jpeg'
import PRO6 from '../assets/imgs/project/pro6.jpeg'
import PRO7 from '../assets/imgs/project/pro7.jpeg'
import PRO8 from '../assets/imgs/project/pro8.jpeg'
import PRO9 from '../assets/imgs/project/pro9.jpeg'
import PRO10 from '../assets/imgs/project/pro10.jpg'
import PRO11 from '../assets/imgs/project/pro11.jpg'
import PRO12 from '../assets/imgs/project/pro12.jpg'
import PRO13 from '../assets/imgs/project/pro13.jpg'
import PRO14 from '../assets/imgs/project/pro14.jpg'
import PRO15 from '../assets/imgs/project/pro15.jpg'
import PRO16 from '../assets/imgs/project/pro16.jpg'
const lists = [
    {
        label: '测绘类',
        value: '1',
        children: [
            {
                title: '广东粤电珠海金湾海上风电项目29#风机附近海域多波束与侧扫声呐扫海服务'
            },
            {
                title: '中广核惠州及后湖海上风电场风机安装工程Ⅳ标段海上风电场机位底层探测与扫海测量服务'
            },
            { title: '中广核甲子二海上风电场项目基础施工及风机安装II标段--后湖风场3#、63#海底地形地貌扫测浅剖' },
            {
                title: '中节能南鹏岛与三峡新源沙扒海上风电场风机机位周边海域浅地层探测技术服务',
            },
            {
                title: '国家电投徐闻北风电场机位、阳江沙扒、南鹏、珠海金湾、湛江徐闻北、外罗、新寮、三峡沙扒海缆浅地层探测',
            },
            {
                title: '广东区域海上风电场项目风机机位扫测技术服务',
            },
            {
                title: '广东公司惠州电厂码头整体结构、沉降、阳极块检查项目',
            },
            {
                title: '东莞虎门港海湾石油仓储码头有限公司码头、引桥沉降位移服务',
            },
            {
                title: '阳江港进港航道改造工程第三方测量服务',
            },
            {
                title: '汕尾后湖海域沉没“定位架”打捞后水深测量服务',
            },
            {
                title: '惠来靖海海域“新兴达18”沉船打捞后水深测量服务',
            },
            {
                title: '西涌旅游度假区水深测量项目',
            },
            {
                title: '茂名市中油王港石化码头港池、调头区和泊位前沿航道水深测量项目',
            },
            {
                title: '畅达“366”轮沉船打捞后水深测量',
            },
            {
                title: '航盛88”轮沉船打捞后水深测量服务测绘',
            },
            {
                title: '码头港池、回转水域、入口航道测深测量',
            },
            {
                title: '广东省海洋综合执法总队直属三支队粤西巡航执法基地地形测绘服务',
            },
            {
                title: '小铲岛及周边海域地形调查项目',
            },
            {
                title: '广东粤电珠海金湾海上风电项目调查技术服务'
            },
            {
                title: '东莞虎门港海湾石油仓储码头有限公司码头、库区监测服务'
            },
            {
                title: '湛江徐闻一期、二期海上风电项目测风塔附近海域水深测量服务'
            },
        ]
    },
    {
        label: '咨询类',
        value: '2',
        children: [
            { title: '惠州市大亚湾区公务码头工程项目海域使用及保护区影响专题论证服务' },
            { title: '惠州市大亚湾区公务码头工程项目环境影响评价服务' },
            { title: '澳门大学连接横琴通道桥工程海洋生态环境专项评价' },
            { title: '广州港黄埔老港作业区 1#泊位建筑废弃物水运中转临时装卸点工程海域使用论证报告表' },
            { title: '湛江市鹤地水库环境综合整治智慧管理系统初步设计方案编制项目' },
            { title: '《中广核阳江南鹏岛项目风机优化升级施工通航安全保障方案》及《粤电广东阳江沙扒项目风机优化升级施工通航安全保障方案》' },
            { title: '《三峡新能源广东阳江沙扒项目风机优化升级施工通航安全保障方案》' },
            { title: '《中节能阳江南鹏岛海上风电场300MW机组优化方案大部件更换吊装施工通航安全保障方案》' },
            { title: '大亚湾开发区第一次全国自然灾害综合风险普查服务（海洋灾害调查）' },
            { title: '海南省陵水黎族自治县第一次全国自然灾害综合风险普查服务（海洋灾害调查）' },
            { title: '广东省海域使用海岸线动态监测技术服务（惠州至汕尾）' },
            { title: '乾务赤坎大联围平沙段海堤百年一遇达标加固工程（平沙西堤）通航条件影响评价咨询服务' },
            { title: '惠州市大亚湾区公务码头工程项目水文泥沙研究与波浪数学模型研究专题报告' },
            { title: '激光雷达海上实验服务项目' },
        ]
    }, {
        label: '勘察类',
        value: '3',
        children: [
            { title: '大亚湾区澳头渔港设施建设工程' },
            { title: '粤港澳大湾区国际分拨中心（自编9#仓库）一期项目勘察' },
            { title: '汕尾红海湾遮浪渔港二期工程项目工程区域地质勘察和测量服务、波浪数学模型研究服务、可行性研究服务、水文泥沙研究服务' },
        ]
    }
]
const list2 = [
    { title:'工程测量',img:PRO12},
    { title:'海洋测绘',img:PRO13},
    { title:'摄影测量与遥感',img:PRO10},
    {title:'界线与不动产测绘',img:PRO4},
    {title:'地理信息系统工程',img:PRO5},
    {title:'岩土工程勘测',img:PRO16},
    {title:'环境影响评价',img:PRO7},
    {title:'海域使用论证',img:PRO3},
    {title:'通航航道条件影响评估',img:PRO9},
    {title:'通航安全保障方案',img:PRO5},
    {title:'结构检测（沉降位移观测）',img:PRO15},
    {title:'海上风电全生命周期运维解决方案',img:PRO11},
    {title:'港口码头运维解决方案',img:PRO1},

]
const onChange = (value: string) => {
    currentValue.value = value;

}

</script>
<style lang="less" scoped>
.title{
    display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding-top: 10px;
}
.project-list-wrap{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0 12px;
}
.project-card{
    box-sizing: border-box;
    font-size: 24rpx;
    border-radius: 0 0 8px 8px;
    border-bottom: none;
margin-top: 10px;
   
}
.project-card__main{
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
.project-card__thumb  .t-image{
        height: 100%;
    }
.project-card__title{
    margin-top: 10px;
    word-wrap: break-word;
    width: 190px;
    line-height: 1.5em;
}
</style>