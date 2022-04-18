import { Button, Grid } from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

const App = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Button variant="outlined" color="primary" startIcon={<AddCircleTwoToneIcon color="primary" />}>New Recap</Button>
    </Grid>
  );
};

export default App;
