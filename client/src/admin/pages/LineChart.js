import { React, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const LineChart = () => {
  const [res, setres] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5000/api/products?productId=1"
      );
      const data = await response.json();
      setres(data);
    }
    fetchData();
  }, []);

  const data = {
    labels: res?.map((x) => x.datetime.slice(0,10)),
    datasets: [
      {
        label: "price",
        data: res?.map((x) => x?.price),
        fill: false,
        borderColor: ["#e76d67"],
        backgroundColor: ["#e76d67"],
        pointRadius: 1,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
   
    indexAxis: "x",
    interaction: {
      mode: "index",
      intersect: false,
    },
    responsive: true,

    maintainAspectRation: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },

    legend: {
      labels: {
        fontSize: 26,
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <div>
      <span> Line Chart</span>
      <Line
        data={data}
        width={800}
        height={300}
        options={options}
        plugins={[
          {
            afterDraw: (chart) => {
              if (chart.tooltip?._active?.length) {
                const x = chart.tooltip._active[0].element.x;
                const yAxis = chart.scales.y;
                const ctx = chart.ctx;
                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([5, 7]);
                ctx.moveTo(x, yAxis.top);
                ctx.lineTo(x, yAxis.bottom);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "grey";
                ctx.stroke();
                ctx.restore();
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
