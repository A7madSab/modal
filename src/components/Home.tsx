import { useState } from "react"
import { Button, Grid, Typography, Dialog, Divider, IconButton } from "@mui/material"
import Tabs from "src/components/Tabs"
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone"
import AddBusinessSharpIcon from "@mui/icons-material/AddBusinessSharp"
import CancelSharpIcon from "@mui/icons-material/CancelSharp"
import Logo from "src/components/Logo"

const App = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Dialog fullWidth maxWidth="sm" onClose={() => setOpen(false)} open={open}>
                <Grid py="15px" px="25px">
                    <Grid container alignItems="center" columnSpacing="24px">
                        <Grid item>
                            <Grid minWidth="24px" minHeight="24px" sx={{ backgroundColor: "#e8e3e5", padding: "15px", borderRadius: "10px" }}>
                                <AddBusinessSharpIcon fontSize="large" />
                            </Grid>
                        </Grid>
                        <Grid item flexGrow={1}>
                            <Typography>Customer Details</Typography>
                            <Typography variant="subtitle2" fontWeight="regular">
                                Personalize the recap before publishing
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => setOpen(false)}>
                                <CancelSharpIcon fontSize="large" />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider sx={{ margin: "10px 0px", backgroundColor: "#e8e3e5" }} />
                    <Logo />
                    <Grid>
                        <Tabs />
                    </Grid>
                    <Divider sx={{ margin: "10px 0px", backgroundColor: "#e8e3e5" }} />
                    <Grid container justifyContent="flex-end" spacing="12px" pt="10px">
                        <Grid item>
                            <Button variant="contained" color="secondary">
                                Save Draft
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Dialog>

            <Grid sx={{ backgroundColor: "#1d1b28" }} container justifyContent="center" alignItems="center" minHeight="100vh">
                <Button onClick={() => setOpen(true)} variant="outlined" color="primary" startIcon={<AddCircleTwoToneIcon color="primary" />}>
                    New Recap
                </Button>
            </Grid>
        </>
    )
}

export default App
