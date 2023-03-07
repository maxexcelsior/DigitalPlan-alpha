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
        var AmapRoad = L.tileLayer("https://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=2&style=8&ltype=11%0A%0A"  , {maxZoom: 19, attribution: '© AmapRoad'});
        var TianmapVector = L.tileLayer("https://t0.tianditu.gov.cn/vec_c/wmts?tk=60cb60087824a7f7bdb3845ce8a316dc"  , {maxZoom: 19, attribution: '© TmapVector'});
        var TianmapSatellite = L.tileLayer("https://t0.tianditu.gov.cn/img_c/wmts?tk=60cb60087824a7f7bdb3845ce8a316dc"  , {maxZoom: 19, attribution: '© TmapmapSatellite'});

        //创建一个底图组
        var baseMaps = {
            // "OpenStreetMap": osm,   //OSM的坐标与高德有差别
            "高德影像": AmapSatellite,
            "高德矢量": AmapVector,
            "天地图矢量": TianmapVector,
            "天地图影像": TianmapSatellite,
        };

        //设置marker
        var west_district = L.marker([23.115267, 113.363438], {icon: markerIcon}).bindPopup('金融城西区'),
            startup_district    = L.marker([23.11436, 113.381462], {icon: markerIcon}).bindPopup('金融城起步区'),
            north_district    = L.marker([23.122017, 113.381977], {icon: markerIcon}).bindPopup('金融城北区'),
            east_district    = L.marker([23.112426,113.394294], {icon: markerIcon}).bindPopup('金融城东区');
        //创建一个叠加图层组，这个叠加图层组是上面定义的分区名称
        var districts = L.layerGroup([west_district, startup_district, north_district, east_district]);


        //定义geojson对象并加载外部数据
        var jrc_geojson = require('@/data/金融城.json');
        var qjxzq_geojson = require('@/data/广州市区级行政区.json');
        var qjxzq_boundary = L.geoJSON(qjxzq_geojson);
        var jrc_boundary = L.geoJSON(jrc_geojson);

        //将矢量、json等数据添加到叠加图层组overlayMaps中
        var overlayMaps = {"Districts": districts, "区级行政区":qjxzq_boundary, "金融城":jrc_boundary, "路网":AmapRoad};

        //定义地图
        let map = L.map("map", {
          center: [23.114302, 113.381237], // 中心位置 
          zoom: 14, // 缩放等级
          attributionControl: false, // 版权控件
          zoomControl: false, //默认在左上角，要自定义的话必须false
          layers: AmapSatellite
        });
        map.createPane('labels');

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

        // 设置 leaflet.pm 工具条语言
        map.pm.setLang('zh');

        //添加图层控制组件，图层控制组件只有两种，baseMaps和overlayMaps，baseMaps是单选，overlayMaps可以复选，矢量图形、json等数据都要添加到叠加图层组overlayMaps中
        var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);




      }
    },


  }


</script>
