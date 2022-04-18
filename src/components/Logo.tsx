import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const Logo = () => {
    return (
        <Grid container>
            <Grid xs={12} item px="20px">
                <Avatar sx={{ bgcolor: "green" }}>N</Avatar>
            </Grid>
            <Grid xs={12} item container columnSpacing="24px">
                <Grid item>
                    <Button sx={{ padding: "0px", minWidth: "0px" }} variant="text">
                        <Typography variant="subtitle1" fontWeight="regular" color="blue">
                            Remove Logo
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button sx={{ padding: "0px", minWidth: "0px" }} variant="text">
                        <Typography variant="subtitle1" fontWeight="regular" color="blue">
                            Upload New Logo
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Logo
