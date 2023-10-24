<template>
    <div class="desc">
    <p>
      广东宇恒空间信息技术有限公司是一家以空间信息采集、处理和应用的技术服务商。聚焦自然资源、海洋、水利、农业农村、生态环境、交通、住建、电力等行业，为用户提供测绘，工程勘察，海洋调查，海洋工程技术咨询（海洋环境影响评价、海域使用论证、海洋工程安全评价、通航安全保障方案、航道条件影响评价、防治船舶污染海洋环境风险评价等），地质灾害评估与治理，工程监测、检测，设计总承包等专业技术服务。
    </p>
    <p>
      公司现有员工22人，其中高级工程师3人，工程师6人，注册测绘师2人，注册环评工程师1人，其他技术人才10多人。拥有超高分辨率多波束、单波束、侧扫声纳、浅地层剖面声纳、声速仪、验潮仪、验流仪、RTK、无人机、全站仪、水准仪等一系列海陆勘测设备，为社会提供专业、优质、安全的技术服务。
    </p>
    <p>
      公司秉承以“诚信为本，客户满意”为导向，“严谨求实，创新求精”为目标，通过“团结奋进，追求卓越”的企业精神，努力打造“聚力量、立标杆、创辉煌”的企业愿景。高度重视现代企业管理和企业文化的建设工作，坚持“用文化凝聚人心，用制度规范行为”的管理理念，致力于为员工营造充分展示自我才智，发挥潜能的平台。
    </p>
  </div>
  <div>
    <tmap-map ref="map" mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ" :center="center">
      <tmap-multi-label id="label-layer" :styles="styles" :geometries="geometries" />
    </tmap-map>
    <t-cell-group>
      <t-cell title="地址：广州市新港东路66号万胜科创园A栋106" hover :bordered="false" />
      <t-cell title="电话：020-89882997" hover :bordered="false" />
      <t-cell title="手机1：136 0243 9186（吴生）" hover :bordered="false" />
      <t-cell title="手机2：137 1087 9718（任生）" hover :bordered="false" />
    </t-cell-group>
  </div>
</template>

<script setup lang="ts">

import { defineComponent, ref, shallowRef } from 'vue';
const markers = ref()
const paths = [
  { lat: 40.041054, lng: 116.272305 },
  { lat: 40.039419, lng: 116.272721 },
  { lat: 40.039764, lng: 116.274824 },
  { lat: 40.041374, lng: 116.274491 },
]

const styles = shallowRef({
  label: {
    color: '#3777FF', // 颜色属性
    size: 20, // 文字大小属性
    offset: { x: 0, y: 0 }, // 文字偏移属性单位为像素
    angle: 0, // 文字旋转属性
    alignment: 'center', // 文字水平对齐属性
    verticalAlignment: 'middle', // 文字垂直对齐属性
  },
})



const geometriesData = [
  {
    id: 'label', // 点图形数据的标志信息
    styleId: 'label', // 样式id
    position: { lat: 23.096711, lng: 113.388812 }, // 标注点位置
    content: '宇恒空间', // 标注文本
    properties: {
      // 标注点的属性数据
      title: 'label',
    },
  },
]
const geometries = shallowRef(geometriesData)
const center = ref({ lat: 23.096711, lng: 113.388812 })
const zoom = ref(10)
const doubleClickZoom = ref(true);
const print = (e: unknown) => {
  console.log(e);
}


</script>
<style lang="less" scoped>

.about {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding-top: 10px;
}

.desc {
  padding: 15px;
  font-size: 1.2rem;

  p {
    text-indent: 2rem;
    margin-bottom: 1em;
    text-align: justify;
  }
}
</style>
