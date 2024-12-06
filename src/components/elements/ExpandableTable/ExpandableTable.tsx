import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactElement, useState } from "react";
import { Cell, Row, TableData } from "./ExpandableTableTypes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CellComponent = ({ data }: { data: Cell }) => {
  return <TableCell align={data.align}>{data.text}</TableCell>;
};

export const ExpandableRow = ({ data }: { data: Row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {data.cells.map((cell) => (
          <CellComponent data={cell} />
        ))}
      </TableRow>
      <TableRow>
        <TableCell colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                {data.content && (
                  <TableBody>
                    {data.content.map((row: Row, i: any) => (
                      <TableRow key={i}>
                        {row.cells.map((cell) => (
                          <TableCell align={cell.align}>{cell.text}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export const ExpandableTable = ({ data }: { data: TableData }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "70vw" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {data.headers.map((header) => (
              <TableCell align={header.align}>{header.text}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row, i) => (
            <ExpandableRow data={row} key={i} />
          ))}
          {/* {data.rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
