import {
  AppBar,
  CssBaseline,
  Link,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { FaUser } from "react-icons/fa";
import React from "react";

const NavItems = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
}));

function App() {

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Typography variant="h6" color="primary">
            Logo
          </Typography>
          <NavItems>
            <Link href="#" color="inherit" underline="none">
              Home
            </Link>
            <Link href="#" color="inherit" underline="none">
              Cryptos
            </Link>
            <Link href="#" color="inherit" underline="none">
              Dashboard
            </Link>
            <Link href="#" color="primary" underline="none">
              <FaUser size="30" />
            </Link>
          </NavItems>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
