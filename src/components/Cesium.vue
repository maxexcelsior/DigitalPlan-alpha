<template>  
    <div id="cesiumContainer"></div>
</template>



<script>
// 这个script是一个vue应用
// let Cesium = require("../../build/Cesium-1.80/Build/Cesium");
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Mzg3ODE5Yy0wMGVjLTRhMjMtYmQxMS1hZmFlNTQ4NjA1MTgiLCJpZCI6NTAwNTAsImlhdCI6MTYxNzYxMTQwNX0.ci0hbAbdcyUKpzVrS9CboI93PxV-uHnJtDrwF68IoBI';
export default {
  name: 'CesiumView',
  props: {
    msg: String
  },
  mounted() {
    // var geeMetadata = new Cesium.GoogleEarthEnterpriseMetadata('http://www.earthenterprise.org/3d');
    // var gee = new Cesium.GoogleEarthEnterpriseImageryProvider({
    //     metadata : geeMetadata
    // });
    //加载谷歌影像
    var google = new Cesium.UrlTemplateImageryProvider({url:"http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"}); // eslint-disable-line no-unused-vars
    //加载高德影像
    var amap_raster = new Cesium.UrlTemplateImageryProvider({url:"https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"}); // eslint-disable-line no-unused-vars
    var amap_vector = new Cesium.UrlTemplateImageryProvider({url:"http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"}); // eslint-disable-line no-unused-vars
    var amap_label = new Cesium.UrlTemplateImageryProvider({url:"http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8"}); // eslint-disable-line no-unused-vars
    
    var arcgis = new Cesium.UrlTemplateImageryProvider({url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"}); // eslint-disable-line no-unused-vars
    
    // 加载地形
    var terrain = new Cesium.CesiumTerrainProvider({
        url : Cesium.IonResource.fromAssetId(1),
        requestVertexNormals : true
      });
    //加载视图
    var viewer = new Cesium.Viewer("cesiumContainer", {
      animation: false, //是否创建动画小器件，左下角仪表
      baseLayerPicker: false, //是否显示图层选择器
      fullscreenButton: true, //是否显示全屏按钮
      geocoder: true, //是否显示geocoder小器件，右上角查询按钮
      homeButton: false, //是否显示Home按钮
      infoBox: true, //是否显示信息框
      sceneModePicker: false, //是否显示3D/2D选择器
      selectionIndicator: true, //是否显示选取指示器组件
      timeline: false, //是否显示时间轴
      navigationHelpButton: false, //是否显示右上角的帮助按钮
      scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
      clock: new Cesium.Clock(), //用于控制当前时间的时钟对象
      selectedImageryProviderViewModel: undefined, //当前图像图层的显示模型，仅baseLayerPicker设为true有意义
      imageryProviderViewModels: Cesium.createDefaultImageryProviderViewModels(), //可供BaseLayerPicker选择的图像图层ProviderViewModel数组
      selectedTerrainProviderViewModel: undefined, //当前地形图层的显示模型，仅baseLayerPicker设为true有意义
      terrainProviderViewModels: Cesium.createDefaultTerrainProviderViewModels(), //可供BaseLayerPicker选择的地形图层ProviderViewModel数组
      imageryProvider: amap_raster,
      terrainProvider: terrain, //地形图层提供者，仅baseLayerPicker设为false有意义
      fullscreenElement: document.body, //全屏时渲染的HTML元素,
      useDefaultRenderLoop: true, //如果需要控制渲染循环，则设为true
      targetFrameRate: undefined, //使用默认render loop时的帧率
      showRenderLoopErrors: false, //如果设为true，将在一个HTML面板中显示错误信息
      automaticallyTrackDataSourceClocks: true, //自动追踪最近添加的数据源的时钟设置
      contextOptions: undefined, //传递给Scene对象的上下文参数（scene.options）
      sceneMode: Cesium.SceneMode.SCENE3D, //初始场景模式
      mapProjection: new Cesium.WebMercatorProjection(), //地图投影体系
      dataSources: new Cesium.DataSourceCollection()
      //需要进行可视化的数据源的集合
    });
    
    viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../assets/geodata/dongguan.json', {
        stroke: Cesium.Color.HOTPINK,
        fill: Cesium.Color.PINK.withAlpha(0.5),
        strokeWidth: 3
    }));
    
    //地点坐标
    //天安门 = 116.39, 39.9, 15000.0
    //中国 = 73.66, 53.55, 135.05, 3.86
    // 初始观看范围
    viewer.camera.setView({
        destination: Cesium.Rectangle.fromDegrees(113.73, 23.039, 113.78, 22.98)
    //     destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 15000.0),
        // destination: new Cesium.Cartesian3(1332761.6877998516, -4662399.913291841, 4137888.8927274314),
        // orientation: {
        //     heading: 0.6,
        //     pitch: -0.666,
        //     roll: 0.0
        // }
    });
    //图像叠加↓↓↓
    // viewer.imageryLayers.addImageryProvider(amap_label);
    //加载3D tiles
    var city = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({url:Cesium.IonResource.fromAssetId(75343)}));
    viewer.scene.globe.depthTestAgainstTerrain = true; //开了这个可以让建筑根据地形放在地面上
    //显示风格
    var transparentStyle = new Cesium.Cesium3DTileStyle({ // eslint-disable-line no-unused-vars
        color: "color('white', 0.3)",
        show:true
    });
    var heightstyle = new Cesium.Cesium3DTileStyle({
        color : {
            conditions: [
            ['${Height} >= 100', 'color("purple")'],
            ['${Height} >= 50', 'color("red")'],
            ['true', 'color("blue")']
            ]
        },
        show : '${Height} > 0',
        meta : {
            description : '"Building id ${id} has height ${Height}."'
        }            
    }); // eslint-disable-line no-unused-vars
    //选择风格
    city.style = heightstyle;
    //清晰度优化
    // viewer.scene.fxaa = false;
    //经纬度控件
    var longitude_show=document.getElementById('longitude_show');  
    var latitude_show=document.getElementById('latitude_show');  
    var altitude_show=document.getElementById('altitude_show');  
    var canvas=viewer.scene.canvas;  
    //具体事件的实现  
    var ellipsoid=viewer.scene.globe.ellipsoid;  
    var handler = new Cesium.ScreenSpaceEventHandler(canvas);  
    handler.setInputAction(function(movement){  
                //捕获椭球体，将笛卡尔二维平面坐标转为椭球体的笛卡尔三维坐标，返回球体表面的点  
                var cartesian=viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);  
                if(cartesian){  
                    //将笛卡尔三维坐标转为地图坐标（弧度）  
                    var cartographic=viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);  
                    //将地图坐标（弧度）转为十进制的度数  
                        var lat_String=Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);  
                        var log_String=Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);  
                        var alti_String=(viewer.camera.positionCartographic.height/1000).toFixed(2);  
                        longitude_show.innerHTML=log_String;  
                        latitude_show.innerHTML=lat_String;  
                        altitude_show.innerHTML=alti_String;  
                }  
    },Cesium.ScreenSpaceEventType.MOUSE_MOVE);  
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
#cesiumContainer {
  height: calc(100vh - 36px - 2px); /* -2px是上下描边粗细 */
}

</style>