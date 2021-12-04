import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#121212",
    },
    text: {
      primary: colors.grey[50],
      secondary: colors.grey[200],
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      "sans-serif"
    ].join(',')
  }
});

export default theme;
