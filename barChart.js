import ApexCharts from "apexcharts";

const gridStack = {
  chart: {
    animations: {
      enabled: false,
      easing: "swing",
    },
    foreColor: "#333",
    fontFamily: "Roboto",
    height: 125,
    id: "iUfJq",
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
    type: "bar",
    width: "100%",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        background: "#fff",
      },
    },
  },
  colors: ["#0083E9", "#4AA8F0", "#9CCDF6", "#A63030", "#546E7A"],
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: "Column 1",
      data: [
        {
          x: "Item 1",
          y: "50",
        },
        {
          x: "Item 2",
          y: "30",
        },
        {
          x: "Item 3",
          y: "50",
        },
      ],
    },
    {
      name: "Column 2",
      data: [
        {
          x: "Item 1",
          y: "30",
        },
        {
          x: "Item 2",
          y: "40",
        },
        {
          x: "Item 3",
          y: "30",
        },
      ],
    },
    {
      name: "series-3",
      data: [
        {
          x: "Item 1",
          y: "20",
        },
        {
          x: "Item 2",
          y: "30",
        },
        {
          x: "Item 3",
          y: "20",
        },
      ],
    },
  ],
  tooltip: {
    shared: false,
    intersect: true,
  },
  xaxis: {
    labels: {
      show: false,
    },
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
    show: false,
  },
};

const chart = new ApexCharts(document.querySelector("#grid-stack"), gridStack);

chart.render();
