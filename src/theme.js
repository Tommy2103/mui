import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#121212",
    },
    text: {
      primary: colors.grey[100],
      secondary: colors.grey[400],
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
