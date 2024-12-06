import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(
  categoria: string,
  semana1: number,
  semana2: number,
  semana3: number,
  semana4: number
) {
  return { categoria, semana1, semana2, semana3, semana4 };
}

const rows = [
  createData("Sin categoría", 159, 6.0, 24, 4.0),
  createData("Ingresos por ventas", 237, 9.0, 37, 4.3),
  createData("Total", 262, 16.0, 24, 6.0),
];

export const TablaIngresosActuales = () => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
      <Table aria-label="simple table" className="">
        <TableHead>
          <TableRow>
            <TableCell>Categoría</TableCell>
            <TableCell align="right">Semana 1</TableCell>
            <TableCell align="right">Semana 2</TableCell>
            <TableCell align="right">Semana 3</TableCell>
            <TableCell align="right">Semana 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.categoria}
              </TableCell>
              <TableCell align="right">{row.semana1}</TableCell>
              <TableCell align="right">{row.semana2}</TableCell>
              <TableCell align="right">{row.semana3}</TableCell>
              <TableCell align="right">{row.semana4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
