import { Grid } from "@mui/material";

function Error404() {
  return (
    <Grid
      container
      direction="column"
      className="error-404"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Error 404</h1>
      <h2>Page not found</h2>
    </Grid>
  );
}
export default Error404;
