import Grid from "@mui/material/Grid"
import DefaultInput from "src/components/form/Input"
import DefaultSelect from "src/components/form/Select"

const More = () => {
    return (
        <Grid container rowSpacing="12px" columnSpacing="24px">
            <Grid item xs={4}>
                <DefaultInput label="Predicted SOP:" />
            </Grid>
            <Grid item xs={4}>
                <DefaultSelect label="Sub-Industry:" />
            </Grid>
            <Grid item xs={4}>
                <DefaultSelect label="Opportunity type:" />
            </Grid>
            <Grid item xs={4}>
                <DefaultSelect label="Flag For Case Study:" />
            </Grid>
            <Grid item xs={4}>
                <DefaultSelect label="Pilot Offered:" />
            </Grid>
            <Grid item xs={4}>
                <DefaultInput label="Executive Sponsor:" />
            </Grid>
        </Grid>
    )
}

export default More
