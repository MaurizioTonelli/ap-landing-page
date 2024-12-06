import {
  Card,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type SimpleCardItemProps = {
  title: string;
  children: ReactNode;
  distinctiveBanner?: boolean;
  moreData?: any;
  slim?: boolean;
};

export const SimpleCardItem = ({
  title,
  children,
  distinctiveBanner,
  moreData,
  slim,
}: SimpleCardItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-0">
      <Card className={`px-4 py-${slim ? "0" : "4"} flex flex-col`}>
        <div className="flex flex-col sm:flex-row justify-between gap-0 items-center">
          <div className="flex flex-row items-center gap-1">
            {distinctiveBanner && (
              <div className=" h-2 min-w-[8px] bg-violet-300"></div>
            )}
            <Typography variant="overline" className="text-center">
              {title}
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row gap-0 items-center">
            <Typography variant="subtitle1" className="text-center">
              {children}
            </Typography>
            {moreData && (
              <IconButton
                size="small"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                {expanded && <ExpandLessIcon />}
                {!expanded && <ExpandMoreIcon />}
              </IconButton>
            )}
          </div>
        </div>
        {moreData && expanded && (
          <TableContainer
            component={Paper}
            sx={{ maxWidth: "100%", marginBottom: "4px" }}
          >
            <Table aria-label="simple table">
              <TableBody>
                {Object.keys(moreData).map((key, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {key}
                    </TableCell>
                    <TableCell align="right">{moreData[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Card>
    </div>
  );
};
