import { Pagination } from "@mui/material";
import { ComponentType, ReactNode, useState } from "react";

type WrapperProps = {
  children: ReactNode;
};

type PaginatedDataProps = {
  WrapperElement?: ComponentType<WrapperProps>;
  RowElement: ComponentType<any>;
  rowsPerPage: number;

  data: any[];
};

const RowList = ({
  rows,
  RowElement,
}: {
  rows: any[];
  RowElement: ComponentType<any>;
}) => {
  return (
    <>
      {rows.map((row, i) => (
        <RowElement key={i} data={row} />
      ))}
    </>
  );
};

export const PaginatedData = ({
  WrapperElement,
  RowElement,
  data,
  rowsPerPage,
}: PaginatedDataProps) => {
  const [page, setPage] = useState(1);

  let currentPageData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        {WrapperElement && (
          <WrapperElement>
            <RowList RowElement={RowElement} rows={currentPageData} />
          </WrapperElement>
        )}
        {!WrapperElement && (
          <RowList RowElement={RowElement} rows={currentPageData} />
        )}
      </div>
      <Pagination
        page={page}
        onChange={handleChangePage}
        count={Math.ceil(data.length / rowsPerPage)}
      />
    </div>
  );
};
