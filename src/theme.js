import { colors, createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#181818",
      "900": "#222222"
    },
    primary: {
      main: colors.blue[400],
      contrastText: colors.grey[100]
    },
    text: {
      primary: colors.grey[100],
      secondary: colors.grey[500],
    },

  },
  borderColor: "rgba(255, 255, 255, 0.4)",
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      "sans-serif"
    ].join(',')
  }
});

export default theme;
