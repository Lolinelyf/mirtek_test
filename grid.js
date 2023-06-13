import ApexCharts from "apexcharts";

const grid = {
  chart: {
    animations: {
      enabled: false,
      easing: "swing",
    },
    foreColor: "#333",
    fontFamily: "Roboto",
    height: 400,
    id: "0yP6N",
    toolbar: {
      show: false,
    },
    type: "line"
  },
  plotOptions: {
    radialBar: {
      hollow: {
        background: "#fff",
      },
      dataLabels: {
        name: {},
        value: {},
        total: {},
      },
    },
    pie: {
      donut: {
        labels: {
          name: {},
          value: {},
          total: {},
        },
      },
    },
  },
  colors: ["#A27ED4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"],
  dataLabels: {
    enabled: false,
    style: {
      fontWeight: 700,
    },
  },
  fill: {
    opacity: 1,
  },
  grid: {
    padding: {
      right: 25,
      left: 15,
    },
  },
  legend: {
    show: false,
  },
  labels: [
    "30.05",
    "31.05",
    "01.06",
    "02.06",
    "03.06",
    "04.06",
    "05.06",
  ],
  series: [
    {
      name: "Column",
      type: 'column',
      data: [
        50,
        30,
        60,
        50,
        60,
        65,
        68,
      ],
    },
    {
        name: "Line",
        type: 'line',
        data: [
          50,
          30,
          60,
          50,
          60,
          65,
          68,
        ],
      },
  ],
  tooltip: {
    shared: false,
    intersect: true,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tickPlacement: "between",
    title: {
      style: {
        fontWeight: 700,
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    tickAmount: 5,
    title: {
      style: {
        fontWeight: 700,
      },
    },
  },
};

const chart = new ApexCharts(document.querySelector("#grid"), grid);

chart.render();
