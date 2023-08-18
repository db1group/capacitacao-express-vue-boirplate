<template>
  <v-row>
    <v-col>
      <canvas id="chart"></canvas>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Chart } from 'chart.js/auto';
export default {
  methods: {
    createChart() {
      const context = document.getElementById('chart').getContext('2d');

      const DATA_COUNT = 7;
      const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

      const labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul'];
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 30, 39, 20, 25, 34, -10],
            borderColor: '#f87979',
            backgroundColor: '#f87979',
          },
          {
            label: 'Dataset 2',
            data: [18, 33, 22, 19, 11, 39, 30],
            borderColor: '#7CFC00',
            backgroundColor: '#7CFC00',
          },
        ],
      };
      const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Suggested Min and Max Settings',
            },
          },
          scales: {
            y: {
              // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
              suggestedMin: 30,

              // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
              suggestedMax: 50,
            },
          },
        },
      };
      const myChart = new Chart(context, config);
    },
  },

  mounted() {
    this.createChart();
  },
};
</script>
