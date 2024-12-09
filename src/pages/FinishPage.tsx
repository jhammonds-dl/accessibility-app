import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "wouter";

const FinishPage = () => {
  return (
    <Grid container>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        size="grow"
      >
        <Box>
          <Box sx={{ textAlign: "center" }}>
            You didn't finish the exercise in the allowed time.
          </Box>
          <Box
            component="img"
            src="src\assets\kitten_sign.jpg"
            sx={{ width: "400px", margin: 5 }}
          />
          <Link to="/accessibility-app/exercise">
            <Button
              variant="contained"
              sx={{
                padding: 2,
                display: "flex",
                justifySelf: "center",
              }}
            >
              Try Again
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FinishPage;
