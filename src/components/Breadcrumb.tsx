import React from 'react';
import Typography from "@mui/material/Typography";
import { Breadcrumbs, Link } from "@mui/material";

export default function Breadcrumb({ children }: any) {
  return (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="/">
        HOME
      </Link>
      <Link underline="hover" color="inherit" href="/">
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  );
}
