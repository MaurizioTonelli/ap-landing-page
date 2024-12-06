import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useProjectionSumByMonth } from "@/features/flujo-de-efectivo/api/getProjectionSumByMonth";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getMonthArray } from "@/utils/dateUtils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ProyeccionesGraph = ({
  saldoData,
  proyeccionesData,
  cuentasPorPagarData,
  cuentasPorCobrarData,
}: {
  saldoData: any;
  proyeccionesData: any;
  cuentasPorPagarData: any;
  cuentasPorCobrarData: any;
}) => {
  const cumulativeSum = (
    (sum) => (value: any) =>
      (sum += value)
  )(0);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Proyección de flujo de efectivo",
      },
    },
  };
  const labels = getMonthArray(Object.keys(saldoData).length);
  const data = {
    labels,
    datasets: [
      {
        label: "Saldo total",
        data: Object.values(saldoData).map(cumulativeSum),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 5,
      },
      {
        label: "Proyecciones",
        data: proyeccionesData,
        borderColor: "rgb(99, 255, 132)",
        backgroundColor: "rgba(99, 255, 132, 0.5)",
      },
      {
        label: "Cuentas por pagar",
        data: cuentasPorPagarData,
        borderColor: "rgb(132, 99, 255)",
        backgroundColor: "rgba(132, 99, 255, 0.5)",
      },
      {
        label: "Cuentas por cobrar",
        data: cuentasPorCobrarData,
        borderColor: "rgb(255, 132, 99)",
        backgroundColor: "rgba(255, 132, 99, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} width="100%" height={"500px"} />
    </div>
  );
};
