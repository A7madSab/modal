import { Theme } from "@mui/material"
import { Typography } from "@mui/material/styles/createTypography"

export const createtypography = ({ theme }: { theme: Theme }): Typography => {
    return {
        ...theme.typography,
        fontWeightLight: 200,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h1: {
            fontFamily: "IBM Plex Sans",
            [theme.breakpoints.down("sm")]: {
                fontSize: "26px",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "26px",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "clamp(26px, calc(26px + (39 - 26) * ((100vw - 900px) / (1200 - 900))), 39px)",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "clamp(39px, calc(39px + (39 - 39) * ((100vw - 1200px) / (1536 - 1200))), 39px)",
            },
            [theme.breakpoints.up("xl")]: {
                fontSize: "clamp(39px, calc(39px + (65 - 39) * ((100vw - 1200px) / (1920 - 1200))), 65px)",
            },
        },
        h2: {
            fontFamily: "IBM Plex Sans",
            lineHeight: 1.4,
            [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "18px",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "clamp(18px, calc(18px + (27 - 18) * ((100vw - 900px) / (1200 - 900))), 27px)",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "clamp(27px, calc(27px + (27 - 27) * ((100vw - 1200px) / (1527 - 1200))), 27px)",
            },
            [theme.breakpoints.up("xl")]: {
                fontSize: "clamp(27px, calc(27px + (45 - 27) * ((100vw - 1200px) / (1920 - 1200))), 45px)",
            },
        },
        body1: {
            fontFamily: "IBM Plex Sans",
            lineHeight: 1.4,
            [theme.breakpoints.down("sm")]: {
                fontSize: "16px",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "clamp(16px, calc(16px + (24 - 16) * ((100vw - 900px) / (1200 - 900))), 24px)",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "clamp(24px, calc(24px + (24 - 24) * ((100vw - 1200px) / (1536 - 1200))), 24px)",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "clamp(24px, calc(24px + (40 - 24) * ((100vw - 1200px) / (1920 - 1200))), 40px)",
            },
        },
        body2: {
            fontFamily: "IBM Plex Sans",
            lineHeight: 1.4,
            [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "clamp(14px, calc(14px + (19 - 14) * ((100vw - 900px) / (1200 - 900))), 19px)",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "clamp(19px, calc(19px + (19 - 19) * ((100vw - 1200px) / (1536 - 1200))), 19px)",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "clamp(19px, calc(19px + (25 - 19) * ((100vw - 1200px) / (1920 - 1200))), 25px)",
                lineHeight: "33px",
            },
        },
        subtitle1: {
            fontFamily: "IBM Plex Sans",
            lineHeight: 1.4,
            [theme.breakpoints.down("sm")]: {
                fontSize: "13px",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "clamp(13px, calc(13px + (14 - 13) * ((100vw - 900px) / (1200 - 900))), 14px)",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "clamp(14px, calc(14px + (14 - 14) * ((100vw - 1200px) / (1536 - 1200))), 14px)",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "clamp(14px, calc(14px + (18 - 14) * ((100vw - 1200px) / (1920 - 1200))), 18px)",
            },
        },
        subtitle2: {
            fontFamily: "IBM Plex Sans",
            lineHeight: 1.4,
            [theme.breakpoints.down("sm")]: {
                fontSize: "13px",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "clamp(13px, calc(13px + (14 - 13) * ((100vw - 900px) / (1200 - 900))), 14px)",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "clamp(14px, calc(14px + (14 - 14) * ((100vw - 1200px) / (1436 - 1200))), 14px)",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "clamp(14px, calc(14px + (16 - 14) * ((100vw - 1200px) / (1920 - 1200))), 16px)",
            },
        },
        button: {
            fontFamily: "IBM Plex Sans",
            lineHeight: 1.4,
            [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "clamp(14px, calc(14px + (15 - 14) * ((100vw - 900px) / (1200 - 900))), 15px)",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "clamp(15px, calc(15px + (15 - 15) * ((100vw - 1200px) / (1536 - 1200))), 15px)",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "clamp(15px, calc(15px + (20 - 15) * ((100vw - 1200px) / (1920 - 1200))), 20px)",
            },
        },
    }
}
