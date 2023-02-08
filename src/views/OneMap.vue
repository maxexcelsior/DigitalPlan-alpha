<template>
  <h1>一张图</h1>
    <div id="map">
    </div>
</template>


<script>
  export default {
    name: 'LeafletMap',
    data() {
      return {
        map: null
      }
    },
    mounted() {
      // 地图初始化
      this.initMap()
    },
    methods: {
      // 使用id为map的div容器初始化地图，同时指定地图的中心点和缩放级别
      initMap() {
        let map = L.map("map", {
          center: [23.114302, 113.381237], // 中心位置 
          zoom: 14, // 缩放等级
          attributionControl: false, // 版权控件
          zoomControl: true //缩放控件
        });
        this.map = map; // data上需要挂载

        // 添加 leaflet.pm 的工具条
        map.pm.addControls({
          position: 'topleft',
          drawCircle: false,
        });
        // 设置语言
        map.pm.setLang('zh');


        L.tileLayer(
          //高德矢量↓
          // "http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}" 
          //高德影像↓
          "https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}" 
          //天地图
          // "http://t0.tianditu.gov.cn/img_w/wmts?tk=60cb60087824a7f7bdb3845ce8a316dc" 
          //google影像↓
          // "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}1"
        ).addTo(map) // 加载底图




      }
    }
  }



</script>
<style scoped>
  #map {
    width: 800px;
    height: 500px;
    margin: 50px auto;
  }
</style>