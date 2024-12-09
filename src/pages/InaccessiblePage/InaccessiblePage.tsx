// import React from "react";

import InaccessibleForm from "../../components/InaccessibleForm/InaccessibleForm";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const InaccessiblePage = () => {
  return (
    <Grid container>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        size="grow"
      >
        <Box>
          <h1>Let's Do a Mad Lib!</h1>
          <InaccessibleForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default InaccessiblePage;
