import * as React from "react";

import logo from "@/assets/logo.png";
import { Link } from "@/components/elements";
import { Card, Typography } from "@mui/material";

type GenericCenteredPageProps = {
  children: React.ReactNode;
  title: string;
};

export const GenericCenteredPage = ({
  children,
  title,
}: GenericCenteredPageProps) => {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      <div className="min-h-screen bg-gray-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mb-8">
            <Link className="flex items-center text-white" to="/">
              <img className="h-16 w-auto" src={logo} alt="Workflow" />
            </Link>
          </div>
          <Typography variant="h4" className="text-center text-white">
            {title}
          </Typography>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Card className="p-8">{children}</Card>
        </div>
      </div>
    </>
  );
};
