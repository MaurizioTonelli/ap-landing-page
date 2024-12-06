import { useDeudasClientes } from "@/pages/dashboard-principal/api/getDeudasClientes";
import { currencyFormatter } from "@/utils/currencyFormatter";
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
  cliente: string,
  facturassinpagarultimos3meses: number,
  facturassinpagarmasde3meses: number,
  total: string
) {
  return {
    cliente,
    facturassinpagarultimos3meses,
    facturassinpagarmasde3meses,
    total,
  };
}

const TableDataWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table aria-label="simple table" className="">
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell align="left">
              <div className="flex flex-col">
                <Typography variant="inherit"># Facturas sin pagar</Typography>
                <Typography variant="caption">(últimos 3 meses)</Typography>
              </div>
            </TableCell>
            <TableCell align="left">
              <div className="flex flex-col">
                <Typography variant="inherit"># Facturas sin pagar</Typography>
                <Typography variant="caption">(+ de 3 meses atrás)</Typography>
              </div>
            </TableCell>
            <TableCell align="left">Total</TableCell>
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
            <Typography variant="caption">{data.cliente}</Typography>
          </TableCell>

          <TableCell align="left">
            <Typography variant="caption">
              {data.facturassinpagarultimos3meses}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="caption">
              {data.facturassinpagarmasde3meses}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="caption">
              {currencyFormatter.format(data.total)}
            </Typography>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export const TablaDeudasClientes = () => {
  const deudasMesActual = useDeudasClientes();

  const rows = deudasMesActual.data?.map((deuda) =>
    createData(
      deuda.cliente,
      deuda.facturassinpagarultimos3meses,
      deuda.facturassinpagarmasde3meses,
      deuda.total
    )
  );

  return (
    //TODO: Considerar hacer este Box un componente que encierre la tabla MUI y que la haga responsiva, lo ibas a llamar MuiTableResponsiveWrapper
    <Box sx={{ overflow: "auto", maxWidth: "100%" }}>
      <SimpleCardItem title={`Total`}>
        {currencyFormatter.format(
          deudasMesActual.data?.reduce((accumulator, currentValue) => {
            return currentValue.total + accumulator;
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
