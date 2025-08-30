<script setup>
import { computed, watch, onMounted, ref } from 'vue'

import Highcharts from 'highcharts';
import 'highcharts/highcharts-more'; 
import 'highcharts/modules/pattern-fill';
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/accessibility';
import 'highcharts/themes/adaptive';

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
  series: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    default: null
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
    default: ["#6b4398", "#f3682b", "#69ad4b", "#00b7c9"]
  },
  patterns: {
    type: Array,
    default: [
      'M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5',
      'M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5',
      'M 1.5 0 L 1.5 5 M 4 0 L 4 5',
      'M 0 1.5 L 5 1.5 M 0 4 L 5 4'
    ]
  }
})

const chartContainer = ref(null)

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

  return res
})

const chartXAxis = computed(() => {
  const res = {title: {text: props.xlab}}
  res.categories = props.categories
  res.tickWidth = 1
  res.tickmarkPlacement = "on"
  res.zoomEnabled = true
  return res
})

const chartSeries = computed(() => {
  let series = []
  props.series.forEach((x, i) => {
    series.push({
      name: x.name, 
      data: x.data, 
      type: "column", 
      tooltip: {
        pointFormat: 
          `<span style="font-weight: bold; color: ${props.palette[i]}">{series.name}</span>: ` + 
          `<b>{point.y}</b>${x.hasOwnProperty("range") ? "" : "</br>"}`
      },
      color: {pattern: {color: props.palette[i], path: props.patterns[i], width: 5, height: 5}}
    })

    if (x.hasOwnProperty("range")) {
      series.push({
        name: `${x.name} error`, 
        data: x.range, 
        type: "errorbar", 
        linkedTo: ':previous',
        tooltip: {
          pointFormat: '<span style="font-weight: bold;">&nbsp;({point.low} - {point.high})</span><br/>'
        }
      })
    }
  })

  return series
})

const chartTooltip = computed(() => {
  return {shared: true}
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

const chartChart = computed(() => {
  const chart = {
    zoomType: 'xy',
    height: props.height,
    style: {
      fontFamily: "Poppins, Lato, sans-serif"
    }
  }

  if (props.width) chart.width = props.width
  
  return chart
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
  chartObj.tooltip = chartTooltip.value
  chartObj.plotOptions = chartPlotOptions.value
  chartObj.chart = chartChart.value 
  chartObj.credits = chartCredits.value

  if (props.series.length == 1) {
    chartObj.legend = {enabled: false}
  }

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
  <div ref="chartContainer" class="chart bar-chart"></div>
</template>