import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMonthArray } from "@/utils/dateUtils";
import { Box } from "@mui/material";

function createData(data: any) {
  const months = getMonthArray(Object.keys(data).length);
  return Object.keys(data).map((key, i) => {
    return { mes: months[i], total: data[key] };
  });
}

export const ProyeccionesTable = ({ tableData }: { tableData: any }) => {
  const cumulativeSum = (
    (sum) => (value: any) =>
      (sum += value)
  )(0);

  const values = Object.values(tableData).map(cumulativeSum);

  return (
    <Box sx={{ overflow: "auto", maxWidth: "100%" }}>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Mes</TableCell>
                <TableCell align="right">Saldo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {createData(tableData).map((row: any, i: number) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.mes}
                  </TableCell>
                  <TableCell align="right">{values[i]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
