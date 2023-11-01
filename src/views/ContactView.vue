<template>
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
