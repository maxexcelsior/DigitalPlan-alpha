import * as Cesium from 'cesium'
Cesium.Ion.defaultAccessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Mzg3ODE5Yy0wMGVjLTRhMjMtYmQxMS1hZmFlNTQ4NjA1MTgiLCJpZCI6NTAwNTAsImlhdCI6MTYxNzYxMTQwNX0.ci0hbAbdcyUKpzVrS9CboI93PxV-uHnJtDrwF68IoBI"; //这里的token是自己申请的token
window.CESIUM_BASE_URL = "/public/Cesium/";

class mMap{
    constructor(id){
      this.id = id; //地图容器
      this.viewer = null;
      this.scene = null;
    }
    //初始化地图
    initMap(){
      console.log(this.id)
      this.viewer = new Cesium.Viewer(this.id,{
        geocoder: false,                //是否显示地名查找控件
        sceneModePicker: false,         //是否显示投影方式控件
        navigationHelpButton: false,    //是否显示帮助信息控件
        baseLayerPicker: false,         //是否显示图层选择控件
        homeButton: false,              //是否显示Home按钮
        fullscreenButton: false,        //是否显示全屏按钮
        animation: false, //左下角的动画控件的显示
        shouldAnimate: false, //控制模型动画
        timeline: false, //底部的时间轴
        selectionIndicator: false,
        infoBox: false
      });
      //定位到指定位置
      this.viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(112.876942, 28.235312, 1500.0)
      });
      //去cesium logo水印 或 css
      this.viewer.cesiumWidget.creditContainer.style.display = "none";
      //创建场景
      this.scene = this.viewer.scene;
      if(!this.scene.pickPositionSupported){
        window.alert("此浏览器不支持拾取位置！")
      }
      this.handler = new Cesium.ScreenSpaceEventHandler(this.scene.canvas); 
    }
  }
  
  export function createMap(id){
    window.map = new mMap(id)
  }
