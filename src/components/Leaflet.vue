<template>
    <div id="map" style="height:100%; width:100%;"></div>
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
        //重新引用icon图标
        var markerIcon = L.icon({
            iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
            shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
            iconAnchor: [12.5, 20.5],
            // iconSize:     [38, 95], // size of the icon
            // shadowSize:   [50, 64], // size of the shadow
            // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            // shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [0, -20.5] // point from which the popup should open relative to the iconAnchor
        });   

        //设置地图api
        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '© OpenStreetMap'});
        var AmapSatellite = L.tileLayer("https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}" , {maxZoom: 19, attribution: '© AmapSatellite'});
        var AmapVector = L.tileLayer("http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}"  , {maxZoom: 19, attribution: '© AmapVector'});
        var TianmapVector = L.tileLayer("https://t0.tianditu.gov.cn/vec_c/wmts?tk=60cb60087824a7f7bdb3845ce8a316dc"  , {maxZoom: 19, attribution: '© TmapVector'});
        var TianmapSatellite = L.tileLayer("https://t0.tianditu.gov.cn/img_c/wmts?tk=60cb60087824a7f7bdb3845ce8a316dc"  , {maxZoom: 19, attribution: '© TmapmapSatellite'});

        //设置marker
        var west_district = L.marker([23.115267, 113.363438], {icon: markerIcon}).bindPopup('金融城西区'),
            startup_district    = L.marker([23.11436, 113.381462], {icon: markerIcon}).bindPopup('金融城起步区'),
            north_district    = L.marker([23.122017, 113.381977], {icon: markerIcon}).bindPopup('金融城北区'),
            east_district    = L.marker([23.112426,113.394294], {icon: markerIcon}).bindPopup('金融城东区');
        var districts = L.layerGroup([west_district, startup_district, north_district, east_district]);

        var baseMaps = {
            "OpenStreetMap": osm,
            "高德影像": AmapSatellite,
            "高德矢量": AmapVector,
            "天地图矢量": TianmapVector,
            "天地图影像": TianmapSatellite,
        };

        var overlayMaps = {
            "Districts": districts
        };



        let map = L.map("map", {
          center: [23.114302, 113.381237], // 中心位置 
          zoom: 14, // 缩放等级
          attributionControl: false, // 版权控件
          zoomControl: false, //默认在左上角，要自定义的话必须false
          layers: AmapSatellite
        });

        //定义一个地图缩放控件
        var zoomControl = L.control.zoom({position:'bottomright'});
        //将地图缩放控件加载到地图
        map.addControl(zoomControl);

        this.map = map; // data上需要挂载

        // 添加 leaflet.pm 的工具条
        map.pm.addControls({
          position: 'bottomright',
          drawMarker: false,
          drawCircle: false,
        });
        // 设置语言
        map.pm.setLang('zh');



        // L.tileLayer(
        //   //高德矢量↓
        //   // "http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}" 
        //   //高德影像↓
        //   "https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}" 
        //   //openstreet矢量↓
        //   // "https://tile.openstreetmap.org/{z}/{x}/{y}.png" 
        //   //天地图
        //   // "http://t0.tianditu.gov.cn/img_w/wmts?tk=60cb60087824a7f7bdb3845ce8a316dc" 
        //   //google影像↓
        //   // "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}1"
        // ).addTo(map) // 加载底图

        var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);




      }
    },


  }


</script>
