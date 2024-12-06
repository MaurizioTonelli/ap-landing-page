import { useFacturasMesActual } from "@/pages/dashboard-principal/api/getFacturasMesActual";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { currentMonthName } from "@/utils/dateUtils";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactNode, useEffect } from "react";
import { PaginatedData } from "../elements/PaginatedData";
import { SimpleCardItem } from "../elements/SimpleCardItem";

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

export const TablaFacturacionesDelMes = () => {
  const facturasMesActual = useFacturasMesActual();

  const rows = facturasMesActual.data?.map((factura) =>
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

  return (
    //TODO: Considerar hacer este Box un componente que encierre la tabla MUI y que la haga responsiva, lo ibas a llamar MuiTableResponsiveWrapper
    <Box sx={{ overflow: "auto", maxWidth: "100%" }}>
      <SimpleCardItem title={`Total en ${currentMonthName}`}>
        {currencyFormatter.format(
          facturasMesActual.data?.reduce((accumulator, currentValue) => {
            return currentValue.cantidad + accumulator;
          }, 0)
        )}
      </SimpleCardItem>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <PaginatedData
          data={rows ?? []}
          WrapperElement={TableDataWrapper}
          rowsPerPage={10}
          RowElement={TableDataRow}
        />
      </Box>
    </Box>
  );
};
