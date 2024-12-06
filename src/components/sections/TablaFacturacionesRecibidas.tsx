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
import { useFacturas } from "@/features/cuentas-por-pagar/api/getFacturas";
import { Spinner } from "../elements";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

import "react-datepicker/dist/react-datepicker.css";
import { useProveedores } from "@/features/misc/api/getProveedores";

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

export const TablaFacturacionesRecibidas = () => {
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());

  const queryParams = new URLSearchParams(window.location.search);
  const proveedorQuery = queryParams.get("proveedor");

  const proveedores = useProveedores();
  let proveedor = null;

  const [proveedorSeleccionado, setProveedorSeleccionado] = useState<any>(
    proveedorQuery && {
      label: proveedores.data?.find(
        (proveedor) => proveedor.supplierid == proveedorQuery
      ).suppname,
      id: proveedorQuery,
    }
  );

  useEffect(() => {
    if (proveedores.data && proveedorQuery) {
      console.log("SI PASA");
      setProveedorSeleccionado({
        label: proveedores.data.find(
          (proveedor) => proveedor.supplierid == proveedorQuery
        ).suppname,
        id: proveedorQuery,
      });
    } else if (proveedores.data) {
      setProveedorSeleccionado({
        label: proveedores.data[0].suppname,
        id: proveedores.data[0].supplierid,
      });
    }
  }, [proveedores.data, proveedorQuery]);

  useEffect(() => {
    console.log(proveedorSeleccionado);
  }, [proveedorSeleccionado]);

  const handleChangeSearch = (e: any, value: any) => {
    setProveedorSeleccionado(value);
  };

  if (proveedorSeleccionado) {
    proveedor = proveedorSeleccionado.id;
  } else if (proveedorQuery) {
    proveedor = proveedorQuery;
  } else {
    proveedor = null;
  }

  const facturas = useFacturas(
    {},
    initialDate.toISOString().split("T")[0],
    finalDate.toISOString().split("T")[0],
    proveedor
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
          value={proveedorSeleccionado}
          onChange={handleChangeSearch}
          disablePortal
          id="combo-box-demo"
          options={
            proveedores.data?.map((proveedor) => {
              return {
                label: proveedor.suppname,
                id: proveedor.supplierid,
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
