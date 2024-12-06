import { useFacturasMesActual } from "@/pages/dashboard-principal/api/getFacturasMesActual";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { currentMonthName } from "@/utils/dateUtils";
import {
  Autocomplete,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { PaginatedData } from "../elements/PaginatedData";
import { SimpleCardItem } from "../elements/SimpleCardItem";
import { useFacturas } from "@/features/cuentas-por-cobrar/api/getFacturas";
import { Spinner } from "../elements";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

import "react-datepicker/dist/react-datepicker.css";
import { useClientes } from "@/features/misc/api/getClientes";

function createData(
  fecha: string,
  razonSocial: string,
  cliente: string,
  cantidad: number,
  concepto: string,
  folio: string,
  alloc: number
) {
  return { fecha, razonSocial, cliente, cantidad, concepto, folio, alloc };
}

const TableDataWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table aria-label="simple table" className="">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell align="left">Folio</TableCell>
            <TableCell align="left">Razon Social</TableCell>
            <TableCell align="left">Cliente</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Pagado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

const TableDataRow = ({ data }: { data: any }) => {
  return (
    <>
      {data && (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            <Typography variant="caption">{data.fecha}</Typography>
          </TableCell>

          <TableCell align="left">
            <Typography variant="caption">{data.folio}</Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="caption">
              {data.razonSocial.split(" ")[0]}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="caption">{data.cliente}</Typography>
          </TableCell>
          <TableCell align="right">
            {currencyFormatter.format(data.cantidad)}
          </TableCell>
          <TableCell align="right">
            {currencyFormatter.format(data.alloc)}
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export const TablaFacturacionesEmitidas = () => {
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());

  const queryParams = new URLSearchParams(window.location.search);
  const clienteQuery = queryParams.get("cliente");
  const clientes = useClientes();
  let cliente = null;

  const [clienteSeleccionado, setClienteSeleccionado] = useState<any>(
    clienteQuery && {
      label: clientes.data?.find((cliente) => cliente.debtorno == clienteQuery)
        .name,
      id: clienteQuery,
    }
  );

  useEffect(() => {
    if (clientes.data && clienteQuery) {
      setClienteSeleccionado({
        label: clientes.data.find((cliente) => cliente.debtorno == clienteQuery)
          .name,
        id: clienteQuery,
      });
    } else if (clientes.data) {
      setClienteSeleccionado({
        label: clientes.data[0].name,
        id: clientes.data[0].id,
      });
    }
  }, [clientes.data, clienteQuery]);

  useEffect(() => {
    console.log(clienteSeleccionado);
  }, [clienteSeleccionado]);

  const handleChangeSearch = (e: any, value: any) => {
    setClienteSeleccionado(value);
  };

  if (clienteSeleccionado) {
    cliente = clienteSeleccionado.id;
  } else if (clienteQuery) {
    cliente = clienteQuery;
  } else {
    cliente = null;
  }

  const facturas = useFacturas(
    {},
    initialDate.toISOString().split("T")[0],
    finalDate.toISOString().split("T")[0],
    cliente
  );

  const rows = facturas.data?.map((factura) =>
    createData(
      new Date(factura.origtrandate).toLocaleDateString("es-MX"),
      factura.legalname,
      factura.name,
      factura.cantidad,
      factura.concepto,
      factura.folio,
      factura.alloc
    )
  );

  const handleChangeInitialDate = (date: any) => {
    if (Object.prototype.toString.call(date) === "[object Date]") {
      setInitialDate(date);
    }
  };
  const handleChangeFinalDate = (date: any) => {
    if (Object.prototype.toString.call(date) === "[object Date]") {
      setFinalDate(date);
    }
  };

  return (
    //TODO: Considerar hacer este Box un componente que encierre la tabla MUI y que la haga responsiva, lo ibas a llamar MuiTableResponsiveWrapper
    <Box sx={{ overflow: "auto", maxWidth: "100%" }}>
      <div className="flex flex-row gap-2">
        <div>
          <Typography>Desde</Typography>
          <DatePicker
            locale={es}
            selected={initialDate}
            onChange={handleChangeInitialDate}
          />
        </div>
        <div>
          <Typography>Hasta</Typography>
          <DatePicker
            locale={es}
            selected={finalDate}
            onChange={handleChangeFinalDate}
          />
        </div>
        <Autocomplete
          value={clienteSeleccionado}
          onChange={handleChangeSearch}
          disablePortal
          id="combo-box-demo"
          options={
            clientes.data?.map((cliente) => {
              return {
                label: cliente.name,
                id: cliente.debtorno,
              };
            }) ?? []
          }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Cliente" />}
        />
      </div>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        {facturas.status === "loading" && <Spinner size="md" />}
        <PaginatedData
          data={rows ?? []}
          WrapperElement={TableDataWrapper}
          rowsPerPage={20}
          RowElement={TableDataRow}
        />
      </Box>
    </Box>
  );
};
