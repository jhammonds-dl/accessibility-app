import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "wouter";

const StartPage = () => {
  return (
    <Grid container>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        size="grow"
      >
        <Box>
          <h1>Keyboard-Only Exercise</h1>
          <Box sx={{ textAlign: "center" }}>
            Complete & submit the following exercise, before time expires, using
            only your keyboard.{" "}
          </Box>
          <Link to="/accessibility-app/exercise">
            <Button
              variant="contained"
              sx={{
                marginY: 5,
                padding: 2,
                display: "flex",
                justifySelf: "center",
              }}
            >
              Start Exercise
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StartPage;
