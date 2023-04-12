<template>
    <div id="map" style="height:100%; width:100%;"></div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'web-map',
  mounted() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/views/MapView', "esri/widgets/Search"], { css: true })
    .then(([ArcGISMap, MapView, Search]) => {
      const map = new ArcGISMap({
        basemap: 'topo-vector'
      });

      this.view = new MapView({
        container: this.$el,
        map: map,
        center: [116, 23],
        zoom: 4
      });

      var search = new Search({
          view: view
      });   
        
      view.ui.add(search, "top-right");
    });
  },
  beforeDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }
};

</script>