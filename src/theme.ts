import { colors, createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    borderColor: string;
  }

  interface ThemeOptions {
    borderColor?: string;
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
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
