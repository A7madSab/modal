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
                root: {
                    borderRadius: "10px",
                    height: "45px",
                    textTransform: "none",
                    minWidth: "100px",
                },
                outlinedPrimary: {
                    color: "#000000",
                    border: "1px solid #000000",
                    backgroundColor: "#FFFFFF",
                    "&:hover": {
                        border: "1px solid #FFFFFF",
                        color: "#FFFFFF",
                        backgroundColor: theme.palette.primary.main,
                    },
                },
                containedPrimary: {
                    backgroundColor: "#1d1b28",
                    color: "#FFFFFF",
                },
                containedSecondary: {
                    backgroundColor: "#dfdedf",
                    color: "#7c7a7c",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: "4px",
                },
            },
        },
        ...theme.components,
    }

    return theme
}
