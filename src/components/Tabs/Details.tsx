import Grid from "@mui/material/Grid"
import DefaultInput from "src/components/form/Input"
import DefaultSelect from "src/components/form/Select"

const Details = () => {
    return (
        <Grid container rowSpacing="12px" columnSpacing="24px">
            <Grid item xs={4}>
                <DefaultInput label="Account Name" />
            </Grid>
            <Grid item xs={4}>
                <DefaultSelect label="Location" />
            </Grid>
            <Grid item xs={4}>
                <DefaultInput label="Employee Size" />
            </Grid>
            <Grid item xs={4}>
                <DefaultInput label="Deal Size" />
            </Grid>
            <Grid item xs={4}>
                <DefaultSelect label="Year" />
            </Grid>
            <Grid item xs={4}>
                <DefaultSelect label="Industry" />
            </Grid>
        </Grid>
    )
}

export default Details
