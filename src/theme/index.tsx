import { createTheme } from "@mui/material/styles"
import { createtypography } from "./typography"

export const createMUITheme = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#000000",
            },
            secondary: {
                main: "#FFFFFF",
            },
            grey: {
                400: "#FAFAFA",
                600: "#6E6E6E",
                800: "#00000014",
            },
        },
    })

    theme.typography = createtypography({ theme })

    theme.components = {
        MuiButton: {
            styleOverrides: {
                outlinedPrimary: {
                    color: "#000000",
                    borderRadius: "50px",
                    textTransform: "none",
                    border: "1px solid #000000",
                    backgroundColor: "#FFFFFF",
                    "&:hover": {
                        border: "1px solid #FFFFFF",
                        backgroundColor: theme.palette.primary.main,
                    },
                },
            },
        },
        ...theme.components,
    }

    return theme
}
