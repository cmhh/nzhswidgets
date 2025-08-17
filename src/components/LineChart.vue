<script setup>
import { computed, watch, onMounted, ref } from 'vue'

import Highcharts from 'highcharts';
import 'highcharts/highcharts-more'; 
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/accessibility';

Highcharts.setOptions({
  lang: {
    locale: 'en'
  }
});

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  x: {
    type: Array,
    required: true
  },
  y: {
    type: Array,
    required: true
  },
  magnitude: {
    type: Number,
    default: 0,
    validator: function (value) {
      return [0, 3, 6, 9].indexOf(value) !== -1
    }
  },
  xlab: {
    type: String,
    default: null
  },
  ylab: {
    type: String,
    default: null
  },
  sourceDescription: {
    type: String,
    default: null
  },
  sourceUrl: {
    type: String,
    default: null
  },
  height: {
    type: String,
    default: "400px"
  },
  width: {
    type: Number,
    default: null
  },
  palette: {
    type: Array,
    default: ["#6b4398", "#f3682b", "#69ad4b", "#00b7c9"],
  },
  linetype: {
    type: Array,
    default: ['solid', 'shortdash', 'shortdot', 'shortdashdotdot'],
  }
})

const chartContainer = ref(null)

const chartSeries = computed(() => {
  const series = []

  props.y.forEach((x, i) => {
    series.push({
      name: x.name,
      data: x.data,
      zIndex: 1,
      color: props.palette[i],
      dashStyle: props.linetype[i],
      tooltip: {pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y}</b>'}
    })

    if (x.hasOwnProperty('range')) {
      series.push({
        name: `${x.name}-range`,
        data: x.range,
        type: 'arearange',
        linkedTo: ':previous',
        lineWidth: 0,
        color: props.palette[i],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        },
        tooltip: {pointFormat: '<span >&nbsp;[{point.low}, {point.high}]</span><br/>'}
      })
    }
  })

  return series
})

const chartTitle = computed(() => {
  return {
    text: props.title, useHTML: true, align: "center",
    style: {
      color: "#0b0c0b", 
      fill: "#0b0c0b", 
      fontSize: "16px", 
      fontWeight: "bold"
    }
  }
})

const chartYAxis = computed(() => {
  const res = {title: {text: props.ylab}}

  if (props.magnitude == 3) {
    res.labels = {formatter: function() {return this.value + "k"}}
  } else if (props.magnitude == 6) {
    res.labels = {formatter: function() {return this.value + "M"}}
  } else if (props.magnitude == 9) {
    res.labels = {formatter: function() {return this.value + "B"}}
  }

  res.zoomEnabled = true
  res.lineWidth = 1
  res.crosshair = true

  return res
})

const chartXAxis = computed(() => {
  const res = {title: {text: props.xlab}}
  res.categories = props.x
  res.tickWidth = 1
  res.tickmarkPlacement = "on"
  //res.labels = {rotation: -45, y: 20}
  res.zoomEnabled = true,
  res.crosshair = true

  return res
})

const chartChart = computed(() => {
  return {
    type: 'line',
    zoomType: 'xy',
    height: props.height,
    width: props.width,
    style: {
      fontFamily: "Poppins, Lato, sans-serif"
    }
  }
})

const chartPlotOptions = computed(() => {
  return {
    series: {
      allowPointSelect: true,
      marker: {
        enabled: false
      }
    }
  }
})

const chartCredits = computed(() => {
  const res = {enabled: false}

  if (props.sourceDescription) {
    res.enabled = true
    res.text = props.sourceDescription
  }

  if (props.sourceUrl) {
    res.enabled = true
    res.href = props.sourceUrl
  }

  return res
})

const chartData = computed(() => {
  const chartObj = {}

  chartObj.colors = props.palette
  chartObj.title = chartTitle.value
  chartObj.xAxis = chartXAxis.value
  chartObj.yAxis = chartYAxis.value
  chartObj.series = chartSeries.value 
  chartObj.chart = chartChart.value
  chartObj.plotOptions = chartPlotOptions.value
  chartObj.credits = chartCredits.value
  chartObj.tooltip = {shared: true, split: false}

  if (props.y.length == 1) chartObj.legend = {enabled: false}

  chartObj.exporting =  {
    buttons: {
      contextButton: {
        menuItems: [
          "downloadPNG",
          "downloadJPEG",
          "downloadPDF",
          "downloadSVG",
          "separator",
          "downloadCSV",
          "downloadXLS"
        ]
      }
    }
  }

  return chartObj
})

const updateChart = function() {
  Highcharts.chart(chartContainer.value, chartData.value)
}

onMounted(() => {
  updateChart()
})

watch(chartData, async (newVal, oldVal) => {
  updateChart()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');
</style>

<template>
  <div ref="chartContainer" class="chart line-chart"></div>
</template>