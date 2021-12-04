import Navbar from "../components/Navbar";
import NoMatch from "./NoMatch";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { Container, styled } from "@mui/material";
import { FaUser } from "react-icons/fa";
import Home from "./Home";
import Cryptos from "./Cryptos";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const Link = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none"
}));

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/cryptos">Cryptos</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile"><FaUser size="30" /></Link>
      </Navbar>

      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cryptos" element={<Cryptos />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
