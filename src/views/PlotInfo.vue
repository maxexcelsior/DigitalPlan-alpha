<template>
    <div>
        <h1>地块管控详情</h1>
        <h2>{{$route.params.id}}</h2>
        <div class="plot-details">
            <img :src="`/东区/${plot.image}`" :alt="plot.name" style="height:200px;">
            <p>{{plot.description}}</p>
        </div>
    </div>
</template>

<script>
import sourceData from '@/data/plotdata.json'  //导入源数据
export default {
    computed: {
        plotId() {
            return this.$route.params.id 
        },
        plot() {
            return sourceData.plots.find(plot => plot.id === this.plotId)
        }
    }
}
</script>