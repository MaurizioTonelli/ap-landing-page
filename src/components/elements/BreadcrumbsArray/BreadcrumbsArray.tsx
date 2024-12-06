import clsx from "clsx";
import * as React from "react";

import { Spinner } from "@/components/elements/Spinner";
import { Button, Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export type BreadcrumbsProps = {
  breadcrumbs: {
    text: string;
    icon?: any;
    path: string;
  }[];
};

export const BreadcrumbsArray = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div role="presentation">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb: any) => {
          return (
            <Link
              sx={[
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textDecoration: "none",
                  color:
                    breadcrumb.path == ""
                      ? "ap_text.default.default"
                      : "primary.main",
                },
                {
                  "&:hover": {
                    color: "ap_text.default.secondary",
                  },
                },
              ]}
              href={breadcrumb.path == "" ? null : breadcrumb.path}
            >
              {breadcrumb.icon ?? <></>}
              {breadcrumb.text}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};
