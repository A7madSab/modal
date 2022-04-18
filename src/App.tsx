import Home from "src/components/Home"
import { ThemeProvider } from "@mui/material/styles"
import { createMUITheme } from "src/theme/index"

const App = () => {
    const theme = createMUITheme()

    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    )
}

export default App
