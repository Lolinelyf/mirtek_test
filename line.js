import ApexCharts from "apexcharts";

const line = {
  chart: {
    animations: {
      enabled: false,
      easing: "swing",
    },
    foreColor: "#333",
    fontFamily: "Roboto",
    height: 125,
    id: "OMzwE",
    toolbar: {
      show: false,
    },
    width: "100%",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
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
  colors: ["#FB417B", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"],
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
    itemMargin: {
      vertical: 0,
    },
  },
  markers: {
    hover: {
      size: 0,
      sizeOffset: 6,
    },
  },
  series: [
    {
      name: "Line",
      data: [
        {
          x: "Item 1",
          y: "50",
        },
        {
          x: "Item 2",
          y: "40",
        },
        {
          x: "Item 3",
          y: "10",
        },
        {
          x: "Item 4",
          y: "55",
        },
        {
          x: "Item 5",
          y: "40",
        },
        {
          x: "",
          y: "20",
        },
        {
          x: "",
          y: "40",
        },
        {
          x: "",
          y: "50",
        },
        {
          x: "",
          y: "100",
        },
        {
          x: "",
          y: "70",
        },
        {
          x: "",
          y: "50",
        },
      ],
    },
  ],
  stroke: {
    lineCap: "round",
    width: 4,
  },
  tooltip: {},
  xaxis: {
    type: "numeric",
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
    tickAmount: "dataPoints",
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

const chart = new ApexCharts(document.querySelector("#line"), line);

chart.render();
