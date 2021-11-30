import { AppBar, CssBaseline, Link, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import React from "react";


function App() {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" flexGrow={1}>Logo</Typography>
          <Stack direction="row" gap={theme.spacing(2)}>
            <Link href="#" color="inherit" underline="none">Home</Link>
            <Link href="#" color="inherit" underline="none">Cryptos</Link>
            <Link href="#" color="inherit" underline="none">Dashboard</Link>
          </Stack>
          
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
