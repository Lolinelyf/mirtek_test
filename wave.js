import ApexCharts from "apexcharts";

const options = {
  chart: {
    animations: {
      enabled: false,
    },
    background: "#FFFFFF",
    dropShadow: {
      blur: 6,
      opacity: 1,
    },
    foreColor: "#373D3F",
    fontFamily: "Roboto",
    height: 400,
    id: "YXRET",
    toolbar: {
      show: false,
      tools: {
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true,
      },
    },
    type: "area",
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
  colors: ["#DDA7E1", "#F8428D", "#F8428D", "#fd6a6a", "#546E7A"],
  dataLabels: {
    enabled: false,
    style: {
      fontWeight: 700,
    },
  },
  fill: {},
  grid: {
    padding: {
      right: 36,
      left: 15,
    },
  },
  legend: {
    show: false,
  },
  markers: {
    hover: {
      size: 0,
      sizeOffset: 6,
    },
  },
  series: [
    {
      name: "wave 1",
      data: [
        {
          x: "30.05",
          y: "50",
        },
        {
          x: "31.05",
          y: "40",
        },
        {
          x: "01.06",
          y: "50",
        },
        {
          x: "02.06",
          y: "43",
        },
        {
          x: "03.06",
          y: "50",
        },
        {
          x: "04.06",
          y: "55",
        },
        {
          x: "05.06",
          y: "45",
        },
        {
          x: "06.06",
          y: "47",
        },
        {
          x: "07.06",
          y: "40",
        },
        {
          x: "08.06",
          y: "34",
        },
        {
          x: "09.06",
          y: "45",
        },
      ],
    },
    {
      name: "wave 2",
      data: [
        {
          x: "30.05",
          y: "40",
        },
        {
          x: "31.05",
          y: "50",
        },
        {
          x: "01.06",
          y: "40",
        },
        {
          x: "02.06",
          y: "35",
        },
        {
          x: "03.06",
          y: "50",
        },
        {
          x: "04.06",
          y: "39",
        },
        {
          x: "05.06",
          y: "32",
        },
        {
          x: "06.06",
          y: "47",
        },
        {
          x: "07.06",
          y: "45",
        },
        {
          x: "08.06",
          y: "30",
        },
        {
          x: "09.06",
          y: "50",
        },
      ],
    },
  ],
  stroke: {
    width: 0,
    dashArray: 30,
  },
  tooltip: {},
  xaxis: {
    labels: {
      trim: true,
      style: {},
    },
    tickAmount: "dataPoints",
    title: {
      style: {
        fontWeight: 700,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: [null, null, null, null, null, null],
      },
    },
  },
  theme: {
    palette: "palette4",
  },
};

const chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
