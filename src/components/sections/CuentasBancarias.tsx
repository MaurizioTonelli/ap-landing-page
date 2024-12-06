import { AppButton } from "@/components/elements/AppButton";
import { useCuentasBancarias } from "@/features/misc/api/getCuentasBancarias";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { Card, Typography } from "@mui/material";
import { useEffect } from "react";
import { Spinner } from "../elements";
import { SectionCard } from "../elements/SectionCard";
import { SimpleCardItem } from "../elements/SimpleCardItem";

function CuentaBancariaCard({ balance, nombre, moneda }: any) {
  return (
    <Card className="p-4 flex flex-col gap-4 justify-between">
      <Typography variant="subtitle2">{nombre}</Typography>
      <Typography>
        {currencyFormatter.format(balance)} {moneda}
      </Typography>
    </Card>
  );
}

export const CuentasBancarias = () => {
  const cuentasBancarias = [
    {
      bankaccountname: "BBVA MXN",
      saldo: 1200000,
      currcode: "MXN",
    },
    {
      bankaccountname: "BBVA DLS",
      saldo: 456000,
      currcode: "MXN",
    },
  ];

  const cuentasBancariasAll = useCuentasBancarias();

  const getTotalesCuentasBancarias = () => {
    if (cuentasBancariasAll.data) {
      const pesos = cuentasBancariasAll.data.reduce(
        (accumulator: any, currentValue: any) => {
          if (currentValue.currcode === "MXN")
            return accumulator + currentValue.saldo;
          else return accumulator;
        },
        0
      );
      const dolares = cuentasBancariasAll.data.reduce(
        (accumulator: any, currentValue: any) => {
          if (currentValue.currcode === "USD")
            return accumulator + currentValue.saldo;
          else return accumulator;
        },
        0
      );
      return { pesos, dolares };
    } else {
      return { pesos: 0, dolares: 0 };
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {cuentasBancariasAll.status === "loading" && (
        <div className="w-full flex justify-center">
          <Spinner size="lg" />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <SimpleCardItem title="Total de cuentas en pesos">
          {currencyFormatter.format(getTotalesCuentasBancarias().pesos)} {"MXN"}
        </SimpleCardItem>
        <SimpleCardItem title="Total de cuentas en dólares">
          {currencyFormatter.format(getTotalesCuentasBancarias().dolares)}{" "}
          {"USD"}
        </SimpleCardItem>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cuentasBancariasAll.data
          ?.sort((a, b) => {
            if (a.saldo > b.saldo) {
              return -1;
            } else if (a.saldo < b.saldo) {
              return 1;
            }
            return 0;
          })
          .map((cuenta: any, i: number) => (
            <CuentaBancariaCard
              key={i}
              nombre={cuenta.bankaccountname}
              balance={cuenta.saldo}
              moneda={cuenta.currcode}
            />
          ))}
      </div>
      <AppButton color="secondary">Ver más cuentas</AppButton>
    </div>
  );
};
