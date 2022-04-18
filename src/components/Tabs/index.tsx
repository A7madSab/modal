import { useState } from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Details from "src/components/Tabs/Details"
import More from "src/components/Tabs/More"

const Tabs = () => {
    const [value, setValue] = useState("1")

    const handleChange = (event: any, newValue: any) => setValue(newValue)

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab sx={{ flex: 1 }} label="Details" value="1" />
                    <Tab sx={{ flex: 1 }} label="More" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <Details />
            </TabPanel>
            <TabPanel value="2">
                <More />
            </TabPanel>
        </TabContext>
    )
}

export default Tabs
