import ApexCharts from "apexcharts";

const circlePeople = {
  chart: {
    animations: {
      enabled: false,
    },
    foreColor: "#333",
    fontFamily: "Roboto",
    height: 125,
    id: "aDBRy",
    toolbar: {
      show: false,
    },
    type: "heatmap",
    width: "100%",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
    },
    heatmap: {
      radius: 100,
    },
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
  colors: ["#ADBEC5", "#CDD8DC", "#417D99", "#fd6a6a", "#546E7A"],
  dataLabels: {
    enabled: false,
    style: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  grid: {
    show: false,
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      right: 25,
      left: 15,
    },
  },
  legend: {
    show: false,
    fontSize: 14,
    offsetY: 0,
    markers: {
      offsetY: 2,
      shape: "square",
      size: 10,
    },
    itemMargin: {
      vertical: 0,
    },
  },
  series: [
    {
      name: "Metric1",
      data: [
        {
          x: "w1",
          y: 29,
        },
        {
          x: "w2",
          y: 42,
        },
        {
          x: "",
          y: 10,
        },
        {
          x: "",
          y: 10,
        },
      ],
    },
    {
      name: "Metric3",
      data: [
        {
          x: "w1",
          y: 85,
        },
        {
          x: "w2",
          y: 14,
        },
        {
          x: "",
          y: 10,
        },
        {
          x: "",
          y: 10,
        },
      ],
    },
  ],
  stroke: {
    lineCap: "round",
    colors: ["#fff"],
  },
  tooltip: {
    followCursor: true,
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      show: false,
      style: {},
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    title: {
      style: {
        fontWeight: 700,
      },
    },
  },
  yaxis: {
    show: false,
    tickAmount: 5,
    labels: {
      show: false,
      offsetY: -43.75,
      style: {},
    },
    title: {
      style: {
        fontWeight: 700,
      },
    },
  },
  theme: {
    palette: "palette4",
  },
};

const chart = new ApexCharts(
  document.querySelector("#circle-people"),
  circlePeople
);

chart.render();
