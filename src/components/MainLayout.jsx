import { Outlet } from "react-router-dom";
import Header from "./Header";
import DiscordBtn from "./DiscordBtn";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#77b7e2", dark: "#5991b6" },
    secondary: { main: "#bbbbbb", dark: "#aaa" },
    background: { default: "#0f1021", paper: "#0f1021" },
  },
  typography: {
    fontFamily: "Baskervville",
    h1: {
      fontFamily: "VT323",
      fontSize: "3.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2.4rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.6rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },
    Typography: {
      styleOverrides: {
        h2: {
          fontSize: "2rem",
          fontWeight: 400,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          padding: "1rem 2rem",
        },
        contained: {
          backgroundColor: "#ffa12b",
          "&:hover": {
            backgroundColor: "#ff8a1a",
          },
        },
        text: {
          backgroundColor: "#0b7eca",
          "&:hover": {
            backgroundColor: "#095ca8",
          },
        },
      },
    },
  },
});

function MainLayout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <DiscordBtn />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default MainLayout;
