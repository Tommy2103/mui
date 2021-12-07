import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cryptos from "./pages/Cryptos";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="cryptos" element={<Cryptos />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
