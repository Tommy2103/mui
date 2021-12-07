import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { Button, Container, styled, useTheme } from "@mui/material";
import { FaUser } from "react-icons/fa";


const Link = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

function App() {
  const theme = useTheme();

  return (
    <>
      
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/cryptos">Cryptos</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Button variant="contained">
          <Link to="/login">Log in</Link>
        </Button>
        <Link to="/profile">
          <FaUser size="30" color={theme.palette.primary.main} />
        </Link>
      </Navbar>

      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
